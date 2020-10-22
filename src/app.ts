import { AxiosResponse } from "axios";
import { ProjectApi, TestArtifactApi, DeploymentApi, ExecutionApi, ResultApi } from "./api";
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';
import * as vscode from 'vscode';
import fileDownload, * as jsfd from 'js-file-download';


declare var Blob: {
    prototype: Blob;
    new (): Blob;
    new (request: any, mime: string): Blob;
};

export class App {
    basePath: string;
    configData: any;
    dirPath: string;

    constructor(basePath: string, configFile: string, dirPath: string) {
        this.basePath = basePath;
        this.configData = this.readCttConfig(configFile);
        this.dirPath = dirPath;
        this.checkCttConfig(this.configData);
    }

    private typedKeys<T>(o: T): (keyof T)[] {
        return Object.keys(o) as (keyof T)[];
    }

    private readCttConfig(cttConfig: string) {
        if (fs.existsSync(cttConfig)) {
            const yamlContent = fs.readFileSync(cttConfig, 'utf8');
            const configData = yaml.safeLoad(yamlContent);
            if(configData) {
                console.log(`Read config file data: ${JSON.stringify(configData)}`);
                return configData;
            } else {
                throw new Error(`Config file ${cttConfig} does not have any content.`);
            }
        }
        else {
            throw new Error(`File ${cttConfig} could not be found.`);
        }
    }

    private checkCttConfig(configData: object) {
        const mandatoryFields: Array<string> = ['name', 'repository_url', 'sut_tosca_path', 'ti_tosca_path', 'test_id', 'result_destination_path'];
        for (let element in mandatoryFields) {
            let fieldValue = this.typedKeys(configData)[element];
            if (!fieldValue) {
                throw new Error(`Mandatory field '${mandatoryFields[element]}' not present in given config file.`);
            } else {
                console.log(`Mandatory field '${fieldValue}' is present in given config file.`);
            }
        }
    }


    private async createProject(nameParam: string, repositoryUrlParam: string) {
        const project: AxiosResponse<any> = await new ProjectApi({ basePath: this.basePath }).
            createProject({ name: nameParam, repository_url: repositoryUrlParam });
        console.log(`The data of the AxiosResponse is ${JSON.stringify(project.data.uuid)}`);
        return JSON.stringify(project.data.uuid);
    }

    private async createTestartifact(projectUuidParam: string, sutToscaPathParam: string, tiToscaPathParam: string, 
        sutInputsPathParam: undefined|string, tiInputsPathParam: undefined|string) {

        if (!sutInputsPathParam) {
            sutInputsPathParam = '';
        }

        if (!tiInputsPathParam) {
            tiInputsPathParam = '';
        }

        console.log(`sut_tosca_path: ${sutToscaPathParam}`);
        console.log(`sut_inputs_path: ${sutInputsPathParam}`);
        console.log(`ti_tosca_path: ${tiToscaPathParam}`);
        console.log(`ti_inputs_path: ${tiInputsPathParam}`);

        const testArtifact: AxiosResponse<any> = await new TestArtifactApi({ basePath: this.basePath }).
            createTestartifact({
                project_uuid: projectUuidParam,
                sut_tosca_path: sutToscaPathParam,
                sut_inputs_path: sutInputsPathParam,
                ti_tosca_path: tiToscaPathParam,
                ti_inputs_path: tiInputsPathParam
            });
        console.log(testArtifact.data);
        return JSON.stringify(testArtifact.data[0].uuid);
    }

    private async createDeployment(testArtifactUuidParam: string) {
        const deployment: AxiosResponse<any> = await new DeploymentApi({ basePath: this.basePath }).
            createDeployment({ testartifact_uuid: testArtifactUuidParam });
        console.log(deployment.data);
        return JSON.stringify(deployment.data.uuid);
    }

    private async createExecution(deploymentUuidParam: string) {
        const execution: AxiosResponse<any> = await new ExecutionApi({ basePath: this.basePath }).
            createExecution({ deployment_uuid: deploymentUuidParam });
        console.log(execution.data);
        return JSON.stringify(execution.data.uuid);
    }

    private async createResult(executionUuidParam: string) {
        const result: AxiosResponse<any> = await new ResultApi({ basePath: this.basePath }).
            createResult({ execution_uuid: executionUuidParam });
        console.log(result.data);
        return JSON.stringify(result.data.uuid);
    }

    private async downloadResult(resultUuidParam: string, resultDestinationPathParam: string) {
        const result: AxiosResponse<any> = await new ResultApi({ basePath: this.basePath }).
            downloadResultByUuid(resultUuidParam);
        //const type = result.headers['content-type'];
        //var blob: Blob = new Blob(result.data, type);
        console.log(result.data);
        fs.writeFileSync(resultDestinationPathParam, Buffer.from(result.data, 'binary'));
    };

    async runCTT(outputChannel: vscode.OutputChannel) {
        if (!this.configData) {
            throw new Error(`No config data available. Aborting.`);
        }

        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Radon CTT",
            cancellable: false
        }, async (progress) => 
        {
            progress.report({increment: 15, message: 'Creating Project (1/6)'});
            let projectUuid = await this.createProject(this.configData['name'], this.configData['repository_url']);

            outputChannel.appendLine(`[1/6] Project created successfully (${projectUuid}).`);
            console.log(`Project UUID is ${projectUuid}`);

            if (typeof (projectUuid) === "string") {
                progress.report({increment: 15, message: 'Creating Test Artifacts (2/6)'});
                let testartifactUuid = await this.createTestartifact(projectUuid.replace(/['"]+/g, ''), 
                            this.configData['sut_tosca_path'], this.configData['ti_tosca_path'],
                            this.configData['sut_inputs_path'], this.configData['ti_inputs_path']);

                console.log(`Testartifact UUID is ${testartifactUuid}`);
                outputChannel.appendLine(`[2/6] Test artifact created successfully (${testartifactUuid}).`);


                if (typeof (testartifactUuid) === "string") {
                    progress.report({increment: 15, message: 'Deploying Systems (3/6)'});
                    let deploymentUuid = await this.createDeployment(testartifactUuid.replace(/['"]+/g, ''));

                    console.log(`Deployment UUID is ${deploymentUuid}`);
                    outputChannel.appendLine(`[3/6] Deployment successful (${deploymentUuid}).`);


                    if (typeof (deploymentUuid) === "string") {
                        progress.report({increment: 15, message: 'Executing Tests (4/6)'});
                        let executionUuid = await this.createExecution(deploymentUuid.replace(/['"]+/g, ''));

                        console.log(`Execution UUID is ${executionUuid}`);
                        outputChannel.appendLine(`[4/6] Test execution successful (${executionUuid}).`);

                        if (typeof (executionUuid) === "string") {
                            progress.report({increment: 15, message: 'Obtaining Results (5/6)'});
                            let resultUuid = await this.createResult(executionUuid.replace(/['"]+/g, ''));

                            console.log(`Result UUID is ${resultUuid}`);
                            outputChannel.appendLine(`[5/6] Results successfully obtained (${resultUuid}).`);


                            if (typeof (resultUuid) === "string") {
                                progress.report({increment: 15, message: 'Downloading Results (6/6)'});
                                const resultDestinationPath = this.configData['result_destination_path'];
                                await this.downloadResult(resultUuid.replace(/['"]+/g, ''), path.join(this.dirPath, resultDestinationPath));
                                
                                progress.report({increment: 10, message: 'Finished'});
                                vscode.window.showInformationMessage(`Radon CTT execution finished successfully. Results can be found in '${resultDestinationPath}'`);
                                outputChannel.appendLine(`[6/6] Results successfully downloaded to ${resultDestinationPath}`);
                            }
                        }
                    }
                }
            }
        });
    }
};