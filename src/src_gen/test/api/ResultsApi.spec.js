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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CtfManagementApi);
  }
}(this, function(expect, CtfManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CtfManagementApi.ResultsApi();
  });

  describe('(package)', function() {
    describe('ResultsApi', function() {
      describe('createResult', function() {
        it('should call createResult successfully', function(done) {
          // TODO: uncomment, update parameter values for createResult call and complete the assertions
          /*

          instance.createResult(body, gameId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CtfManagementApi.CreateResultResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getResult', function() {
        it('should call getResult successfully', function(done) {
          // TODO: uncomment, update parameter values for getResult call and complete the assertions
          /*

          instance.getResult(gameId, resultId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CtfManagementApi.ResultResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getScoreboard', function() {
        it('should call getScoreboard successfully', function(done) {
          // TODO: uncomment, update parameter values for getScoreboard call and complete the assertions
          /*

          instance.getScoreboard(gameId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CtfManagementApi.ResultResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateResult', function() {
        it('should call updateResult successfully', function(done) {
          // TODO: uncomment, update parameter values for updateResult call
          /*

          instance.updateResult(body, gameId, resultId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));