import * as fs from 'fs';


export interface CttConfigurationParameters {
    projectName?: string;
    repositoryUrl?: string;
    sutToscaPath?: string;
    sutInputsPath?: string;
    tiToscaPath?: string;
    tiInputsPath?: string;
    testId?: string;
}

export class CttConfiguration {
    projectName?: string;
    repositoryUrl?: string;
    sutToscaPath?: string;
    sutInputsPath?: string;
    tiToscaPath?: string;
    tiInputsPath?: string;
    testId?: string;

    constructor(param: CttConfigurationParameters = {}) {
        this.projectName = param.projectName;
        this.repositoryUrl = param.repositoryUrl;
        this.sutToscaPath = param.sutToscaPath;
        this.sutInputsPath = param.sutInputsPath;
        this.tiToscaPath = param.tiToscaPath;
        this.tiInputsPath = param.tiInputsPath;
        this.testId = param.testId;
    }

    loadFromFile(fileName: string) {
        const yaml = require('js-yaml');
        try {
            let fileContent = fs.readFileSync(fileName, 'utf8');
            let yamlData = yaml.safeLoad(fileContent);
            console.log(yamlData);
            
        } catch (e) {
            console.log(e);
        }
        
    }
}