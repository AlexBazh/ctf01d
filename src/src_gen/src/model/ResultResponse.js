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
 * The ResultResponse model module.
 * @module model/ResultResponse
 * @version 1.1.0
 */
export default class ResultResponse {
  /**
   * Constructs a new <code>ResultResponse</code>.
   * @alias module:model/ResultResponse
   * @class
   * @param id {String} Unique identifier for the result entry
   * @param teamId {String} Identifier of the team this result belongs to
   * @param gameId {String} Identifier of the game this result is for
   * @param score {Number} The score achieved by the team
   * @param rank {Number} The rank achieved by the team in this game
   */
  constructor(id, teamId, gameId, score, rank) {
    this.id = id;
    this.teamId = teamId;
    this.gameId = gameId;
    this.score = score;
    this.rank = rank;
  }

  /**
   * Constructs a <code>ResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultResponse} obj Optional instance to populate.
   * @return {module:model/ResultResponse} The populated <code>ResultResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultResponse();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'String');
      if (data.hasOwnProperty('game_id'))
        obj.gameId = ApiClient.convertToType(data['game_id'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
    }
    return obj;
  }
}

/**
 * Unique identifier for the result entry
 * @member {String} id
 */
ResultResponse.prototype.id = undefined;

/**
 * Identifier of the team this result belongs to
 * @member {String} teamId
 */
ResultResponse.prototype.teamId = undefined;

/**
 * Identifier of the game this result is for
 * @member {String} gameId
 */
ResultResponse.prototype.gameId = undefined;

/**
 * The score achieved by the team
 * @member {Number} score
 */
ResultResponse.prototype.score = undefined;

/**
 * The rank achieved by the team in this game
 * @member {Number} rank
 */
ResultResponse.prototype.rank = undefined;

