'use strict';

angular.module('admissionsApp')
  .service('codeVerifier', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var wrapCode = function (code, methodToCheck) {
      var result = code + ';\ntry {';
      result += 'postMessage({ answer: '+ methodToCheck +' });';
      result += '} catch (e) {' +
        'var trace = printStackTrace({e: e});' +
        'postMessage({ error: { name: e.name, message: e.message}, trace: trace });' +
      '}';
      result += '; postMessage("__terminate__");\n';
      return result;
    };

    this.runSandbox = function(code, methodToCheck, callback){
      var sandbox = $.sandbox({
        timeout: 5000,
        scripts: [
          '//'+ window.location.host +'/components/stacktrace.js',
          'data:application/javascript,' + encodeURIComponent(wrapCode(code, methodToCheck))
        ],
        callback: function(data, error) {
          if (data && data.error) {
            var syntaxError = data.error;
          }
          if (data && data.answer) {
            callback(data.answer);
          }
        }
      });
    };

    
    
  });



        