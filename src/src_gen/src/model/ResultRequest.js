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
import ApiClient from '../ApiClient';

/**
 * The ResultRequest model module.
 * @module model/ResultRequest
 * @version 1.1.0
 */
export default class ResultRequest {
  /**
   * Constructs a new <code>ResultRequest</code>.
   * @alias module:model/ResultRequest
   * @class
   * @param teamId {String} Identifier of the team this result belongs to
   * @param score {Number} The score achieved by the team
   * @param rank {Number} The rank achieved by the team in this game
   */
  constructor(teamId, score, rank) {
    this.teamId = teamId;
    this.score = score;
    this.rank = rank;
  }

  /**
   * Constructs a <code>ResultRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultRequest} obj Optional instance to populate.
   * @return {module:model/ResultRequest} The populated <code>ResultRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultRequest();
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
    }
    return obj;
  }
}

/**
 * Identifier of the team this result belongs to
 * @member {String} teamId
 */
ResultRequest.prototype.teamId = undefined;

/**
 * The score achieved by the team
 * @member {Number} score
 */
ResultRequest.prototype.score = undefined;

/**
 * The rank achieved by the team in this game
 * @member {Number} rank
 */
ResultRequest.prototype.rank = undefined;

