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
/**
 * 
 * @export
 * @interface TestArtifact
 */
export interface TestArtifact {
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    uuid?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    project_uuid?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    sut_tosca_path?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    sut_inputs_path?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    ti_tosca_path?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    ti_inputs_path?: any;
    /**
     * 
     * @type {string}
     * @memberof TestArtifact
     */
    commit_hash?: any;
}
