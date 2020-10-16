import { AxiosResponse } from "axios";
import { ProjectApi, TestArtifactApi, DeploymentApi, ExecutionApi, ResultApi } from "./api";
import * as fs from 'fs';

export class App {
    basePath: string;
    configFile: string;

    constructor(basePath: string, configFile: string) {
        this.basePath = basePath;
        this.configFile = configFile;
    }

    private async createProject(nameParam: string, repositoryUrlParam: string) {
        try {
            const project: AxiosResponse<any> = await new ProjectApi({ basePath: this.basePath }).
                createProject({ name: nameParam, repository_url: repositoryUrlParam });
            console.log(`The data of the AxiosResponse is ${JSON.stringify(project.data.uuid)}`);
            return JSON.stringify(project.data.uuid);
            //
        } catch (error) {
            // some error handling
            console.error(error);
        }
    }

    private async createTestartifact(projectUuidParam: string) {
        try {
            const testArtifact: AxiosResponse<any> = await new TestArtifactApi({ basePath: this.basePath }).
                createTestartifact({
                    project_uuid: projectUuidParam,
                    sut_tosca_path: 'radon-ctt/todolist-dev.csar',
                    sut_inputs_path: '',
                    ti_tosca_path: 'radon-ctt/ti-ec2.csar',
                    ti_inputs_path: 'radon-ctt/inputs.yaml'
                });
            console.log(testArtifact.data);
            return JSON.stringify(testArtifact.data[0].uuid);
            //
        } catch (error) {
            // some error handling
            console.error(error);
        }
    }

    private async createDeployment(testArtifactUuidParam: string) {
        try {
            const deployment: AxiosResponse<any> = await new DeploymentApi({ basePath: this.basePath }).
                createDeployment({ testartifact_uuid: testArtifactUuidParam });
            console.log(deployment.data);
            return JSON.stringify(deployment.data.uuid);
        } catch (error) {
            // some error handling
            console.error(error);
        }
    }

    private async createExecution(deploymentUuidParam: string) {
        try {
            const execution: AxiosResponse<any> = await new ExecutionApi({ basePath: this.basePath }).
                createExecution({ deployment_uuid: deploymentUuidParam });
            console.log(execution.data);
            return JSON.stringify(execution.data.uuid);
        } catch (error) {
            // some error handling
            console.error(error);
        }
    }

    private async createResult(executionUuidParam: string) {
        try {
            const result: AxiosResponse<any> = await new ResultApi({ basePath: this.basePath }).
                createResult({ execution_uuid: executionUuidParam });
            console.log(result.data);
            return JSON.stringify(result.data.uuid);
        } catch (error) {
            // some error handling
            console.error(error);
        }
    }

    private async downloadResult(resultUuidParam: string, downloadDestination: string) {
        try {
            const result: AxiosResponse<any> = await new ResultApi({ basePath: this.basePath }).
                downloadResultByUuid(resultUuidParam);
            const type = result.headers['content-type'];
            const resultFile = new File([result.data], "results.zip");
            fs.writeFileSync(downloadDestination, Buffer.from(resultFile), 'utf8');
        } catch (error) {
            // some error handling
            console.error(error);
        }
    };

    async runSteps() {
        let projectUuid = await this.createProject("ImageResize", "https://github.com/radon-h2020/demo-ctt-imageresize.git");
        console.log(`Project UUID is ${projectUuid}`);

        if (typeof (projectUuid) === "string") {
            let testartifactUuid = await this.createTestartifact(projectUuid.replace(/['"]+/g, ''));
            console.log(`Testartifact UUID is ${testartifactUuid}`);

            if (typeof (testartifactUuid) === "string") {
                let deploymentUuid = await this.createDeployment(testartifactUuid.replace(/['"]+/g, ''));
                console.log(`Deployment UUID is ${deploymentUuid}`);

                if (typeof (deploymentUuid) === "string") {
                    let executionUuid = await this.createExecution(deploymentUuid.replace(/['"]+/g, ''));
                    console.log(`Execution UUID is ${executionUuid}`);

                    if (typeof (executionUuid) === "string") {
                        let resultUuid = await this.createResult(executionUuid.replace(/['"]+/g, ''));
                        console.log(`Result UUID is ${resultUuid}`);

                        if (typeof (resultUuid) === "string") {
                            await this.downloadResult(resultUuid.replace(/['"]+/g, ''), 'ctt-results/result.zip');
                        }
                    }
                }
            }
        }
    }
};