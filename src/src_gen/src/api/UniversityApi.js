/*
 * CTF Management API
 * API for managing CTF (Capture The Flag) games, teams, users, and services.
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.60
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import UniversitiesResponse from '../model/UniversitiesResponse';

/**
* University service.
* @module api/UniversityApi
* @version 1.1.0
*/
export default class UniversityApi {

    /**
    * Constructs a new UniversityApi. 
    * @alias module:api/UniversityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the listUniversities operation.
     * @callback moduleapi/UniversityApi~listUniversitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversitiesResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a list of universities
     * This endpoint retrieves universities. It can optionally filter universities that match a specific term. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.term Optional search term to filter universities by name.
     * @param {module:api/UniversityApi~listUniversitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listUniversities(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'term': opts['term']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UniversitiesResponse;

      return this.apiClient.callApi(
        '/api/v1/universities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}