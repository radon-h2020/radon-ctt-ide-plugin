/* tslint:disable */
/* eslint-disable */
/**
 * RADON CTT Server API
 * This is API of the RADON Continuous Testing Tool (CTT) Server: <a href=\"https://github.com/radon-h2020/radon-ctt\">https://github.com/radon-h2020/radon-ctt<a/>
 *
 * OpenAPI spec version: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { POSTTestArtifact } from '../models';
import { TestArtifact } from '../models';
/**
 * TestArtifactApi - axios parameter creator
 * @export
 */
export const TestArtifactApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a test artifact
         * @param {POSTTestArtifact} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestartifact: async (body?: POSTTestArtifact, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/testartifact`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the test artifact with the given UUID and all elements depending on it
         * @summary Delete a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTestartifactByUuid: async (testartifactUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'testartifactUuid' is not null or undefined
            if (testartifactUuid === null || testartifactUuid === undefined) {
                throw new RequiredError('testartifactUuid','Required parameter testartifactUuid was null or undefined when calling deleteTestartifactByUuid.');
            }
            const localVarPath = `/testartifact/{testartifact_uuid}`
                .replace(`{${"testartifact_uuid"}}`, encodeURIComponent(String(testartifactUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Downloads the generated test artifact
         * @param {string} testartifactUuid UUID of the test artifact to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadTestartifactByUuid: async (testartifactUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'testartifactUuid' is not null or undefined
            if (testartifactUuid === null || testartifactUuid === undefined) {
                throw new RequiredError('testartifactUuid','Required parameter testartifactUuid was null or undefined when calling downloadTestartifactByUuid.');
            }
            const localVarPath = `/testartifact/{testartifact_uuid}/download`
                .replace(`{${"testartifact_uuid"}}`, encodeURIComponent(String(testartifactUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTestartifactByUuid: async (testartifactUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'testartifactUuid' is not null or undefined
            if (testartifactUuid === null || testartifactUuid === undefined) {
                throw new RequiredError('testartifactUuid','Required parameter testartifactUuid was null or undefined when calling getTestartifactByUuid.');
            }
            const localVarPath = `/testartifact/{testartifact_uuid}`
                .replace(`{${"testartifact_uuid"}}`, encodeURIComponent(String(testartifactUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all test artifacts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTestartifacts: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/testartifact`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TestArtifactApi - functional programming interface
 * @export
 */
export const TestArtifactApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a test artifact
         * @param {POSTTestArtifact} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTestartifact(body?: POSTTestArtifact, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TestArtifactApiAxiosParamCreator(configuration).createTestartifact(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes the test artifact with the given UUID and all elements depending on it
         * @summary Delete a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTestartifactByUuid(testartifactUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestArtifact>> {
            const localVarAxiosArgs = await TestArtifactApiAxiosParamCreator(configuration).deleteTestartifactByUuid(testartifactUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Downloads the generated test artifact
         * @param {string} testartifactUuid UUID of the test artifact to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadTestartifactByUuid(testartifactUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await TestArtifactApiAxiosParamCreator(configuration).downloadTestartifactByUuid(testartifactUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTestartifactByUuid(testartifactUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestArtifact>> {
            const localVarAxiosArgs = await TestArtifactApiAxiosParamCreator(configuration).getTestartifactByUuid(testartifactUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get all test artifacts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTestartifacts(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TestArtifact>>> {
            const localVarAxiosArgs = await TestArtifactApiAxiosParamCreator(configuration).getTestartifacts(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TestArtifactApi - factory interface
 * @export
 */
export const TestArtifactApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates a test artifact
         * @param {POSTTestArtifact} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestartifact(body?: POSTTestArtifact, options?: any): AxiosPromise<void> {
            return TestArtifactApiFp(configuration).createTestartifact(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the test artifact with the given UUID and all elements depending on it
         * @summary Delete a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTestartifactByUuid(testartifactUuid: string, options?: any): AxiosPromise<TestArtifact> {
            return TestArtifactApiFp(configuration).deleteTestartifactByUuid(testartifactUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Downloads the generated test artifact
         * @param {string} testartifactUuid UUID of the test artifact to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadTestartifactByUuid(testartifactUuid: string, options?: any): AxiosPromise<string> {
            return TestArtifactApiFp(configuration).downloadTestartifactByUuid(testartifactUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a test artifact
         * @param {string} testartifactUuid UUID of the test artifact to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTestartifactByUuid(testartifactUuid: string, options?: any): AxiosPromise<TestArtifact> {
            return TestArtifactApiFp(configuration).getTestartifactByUuid(testartifactUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all test artifacts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTestartifacts(options?: any): AxiosPromise<Array<TestArtifact>> {
            return TestArtifactApiFp(configuration).getTestartifacts(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TestArtifactApi - object-oriented interface
 * @export
 * @class TestArtifactApi
 * @extends {BaseAPI}
 */
export class TestArtifactApi extends BaseAPI {
    /**
     * 
     * @summary Creates a test artifact
     * @param {POSTTestArtifact} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestArtifactApi
     */
    public createTestartifact(body?: POSTTestArtifact, options?: any) {
        return TestArtifactApiFp(this.configuration).createTestartifact(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes the test artifact with the given UUID and all elements depending on it
     * @summary Delete a test artifact
     * @param {string} testartifactUuid UUID of the test artifact to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestArtifactApi
     */
    public deleteTestartifactByUuid(testartifactUuid: string, options?: any) {
        return TestArtifactApiFp(this.configuration).deleteTestartifactByUuid(testartifactUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Downloads the generated test artifact
     * @param {string} testartifactUuid UUID of the test artifact to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestArtifactApi
     */
    public downloadTestartifactByUuid(testartifactUuid: string, options?: any) {
        return TestArtifactApiFp(this.configuration).downloadTestartifactByUuid(testartifactUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve a test artifact
     * @param {string} testartifactUuid UUID of the test artifact to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestArtifactApi
     */
    public getTestartifactByUuid(testartifactUuid: string, options?: any) {
        return TestArtifactApiFp(this.configuration).getTestartifactByUuid(testartifactUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get all test artifacts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestArtifactApi
     */
    public getTestartifacts(options?: any) {
        return TestArtifactApiFp(this.configuration).getTestartifacts(options).then((request) => request(this.axios, this.basePath));
    }
}
