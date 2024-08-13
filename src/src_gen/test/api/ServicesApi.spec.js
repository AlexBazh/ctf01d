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
    instance = new CtfManagementApi.ServicesApi();
  });

  describe('(package)', function() {
    describe('ServicesApi', function() {
      describe('createService', function() {
        it('should call createService successfully', function(done) {
          // TODO: uncomment, update parameter values for createService call and complete the assertions
          /*

          instance.createService(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CtfManagementApi.CreateServiceResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteService', function() {
        it('should call deleteService successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteService call
          /*

          instance.deleteService(serviceId, function(error, data, response) {
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
      describe('getServiceById', function() {
        it('should call getServiceById successfully', function(done) {
          // TODO: uncomment, update parameter values for getServiceById call and complete the assertions
          /*

          instance.getServiceById(serviceId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CtfManagementApi.ServiceResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listServices', function() {
        it('should call listServices successfully', function(done) {
          // TODO: uncomment listServices call and complete the assertions
          /*

          instance.listServices(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CtfManagementApi.ServiceResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateService', function() {
        it('should call updateService successfully', function(done) {
          // TODO: uncomment, update parameter values for updateService call
          /*

          instance.updateService(body, serviceId, function(error, data, response) {
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
      describe('uploadChecker', function() {
        it('should call uploadChecker successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadChecker call
          /*

          instance.uploadChecker(file, serviceId, function(error, data, response) {
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
      describe('uploadService', function() {
        it('should call uploadService successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadService call
          /*

          instance.uploadService(file, serviceId, function(error, data, response) {
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