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
import { POSTResult } from '../models';
import { Result } from '../models';
/**
 * ResultApi - axios parameter creator
 * @export
 */
export const ResultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new result based on a previously run execution.
         * @summary Creates new result
         * @param {POSTResult} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResult: async (body?: POSTResult, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/result`;
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
         * Deletes the result with the given UUID on it
         * @summary Delete a result
         * @param {string} resultUuid UUID of the result to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResultByUuid: async (resultUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'resultUuid' is not null or undefined
            if (resultUuid === null || resultUuid === undefined) {
                throw new RequiredError('resultUuid','Required parameter resultUuid was null or undefined when calling deleteResultByUuid.');
            }
            const localVarPath = `/result/{result_uuid}`
                .replace(`{${"result_uuid"}}`, encodeURIComponent(String(resultUuid)));
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
         * @summary Downloads the generated results
         * @param {string} resultUuid UUID of the result to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadResultByUuid: async (resultUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'resultUuid' is not null or undefined
            if (resultUuid === null || resultUuid === undefined) {
                throw new RequiredError('resultUuid','Required parameter resultUuid was null or undefined when calling downloadResultByUuid.');
            }
            const localVarPath = `/result/{result_uuid}/download`
                .replace(`{${"result_uuid"}}`, encodeURIComponent(String(resultUuid)));
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
         * @summary Retrieve a result
         * @param {string} resultUuid UUID of the result to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResultByUuid: async (resultUuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'resultUuid' is not null or undefined
            if (resultUuid === null || resultUuid === undefined) {
                throw new RequiredError('resultUuid','Required parameter resultUuid was null or undefined when calling getResultByUuid.');
            }
            const localVarPath = `/result/{result_uuid}`
                .replace(`{${"result_uuid"}}`, encodeURIComponent(String(resultUuid)));
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
         * @summary Get all results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResults: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/result`;
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
 * ResultApi - functional programming interface
 * @export
 */
export const ResultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new result based on a previously run execution.
         * @summary Creates new result
         * @param {POSTResult} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createResult(body?: POSTResult, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ResultApiAxiosParamCreator(configuration).createResult(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes the result with the given UUID on it
         * @summary Delete a result
         * @param {string} resultUuid UUID of the result to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteResultByUuid(resultUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Result>> {
            const localVarAxiosArgs = await ResultApiAxiosParamCreator(configuration).deleteResultByUuid(resultUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Downloads the generated results
         * @param {string} resultUuid UUID of the result to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadResultByUuid(resultUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await ResultApiAxiosParamCreator(configuration).downloadResultByUuid(resultUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve a result
         * @param {string} resultUuid UUID of the result to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResultByUuid(resultUuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Result>> {
            const localVarAxiosArgs = await ResultApiAxiosParamCreator(configuration).getResultByUuid(resultUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get all results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResults(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Result>>> {
            const localVarAxiosArgs = await ResultApiAxiosParamCreator(configuration).getResults(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ResultApi - factory interface
 * @export
 */
export const ResultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new result based on a previously run execution.
         * @summary Creates new result
         * @param {POSTResult} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResult(body?: POSTResult, options?: any): AxiosPromise<void> {
            return ResultApiFp(configuration).createResult(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the result with the given UUID on it
         * @summary Delete a result
         * @param {string} resultUuid UUID of the result to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResultByUuid(resultUuid: string, options?: any): AxiosPromise<Result> {
            return ResultApiFp(configuration).deleteResultByUuid(resultUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Downloads the generated results
         * @param {string} resultUuid UUID of the result to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadResultByUuid(resultUuid: string, options?: any): AxiosPromise<string> {
            return ResultApiFp(configuration).downloadResultByUuid(resultUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a result
         * @param {string} resultUuid UUID of the result to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResultByUuid(resultUuid: string, options?: any): AxiosPromise<Result> {
            return ResultApiFp(configuration).getResultByUuid(resultUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResults(options?: any): AxiosPromise<Array<Result>> {
            return ResultApiFp(configuration).getResults(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ResultApi - object-oriented interface
 * @export
 * @class ResultApi
 * @extends {BaseAPI}
 */
export class ResultApi extends BaseAPI {
    /**
     * Creates a new result based on a previously run execution.
     * @summary Creates new result
     * @param {POSTResult} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultApi
     */
    public createResult(body?: POSTResult, options?: any) {
        return ResultApiFp(this.configuration).createResult(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes the result with the given UUID on it
     * @summary Delete a result
     * @param {string} resultUuid UUID of the result to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultApi
     */
    public deleteResultByUuid(resultUuid: string, options?: any) {
        return ResultApiFp(this.configuration).deleteResultByUuid(resultUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Downloads the generated results
     * @param {string} resultUuid UUID of the result to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultApi
     */
    public downloadResultByUuid(resultUuid: string, options?: any) {
        return ResultApiFp(this.configuration).downloadResultByUuid(resultUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve a result
     * @param {string} resultUuid UUID of the result to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultApi
     */
    public getResultByUuid(resultUuid: string, options?: any) {
        return ResultApiFp(this.configuration).getResultByUuid(resultUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get all results
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultApi
     */
    public getResults(options?: any) {
        return ResultApiFp(this.configuration).getResults(options).then((request) => request(this.axios, this.basePath));
    }
}