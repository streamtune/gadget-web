/**
 * Created by mauro on 01/04/16.
 */
(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$log', 'toastr'];

  /* @ngInject */
  function logger($log, toastr) {
    var service = {
      showToasts: true,

      error: error,
      info: info,
      warning: warning,
      success: success,

      // Straight to console, bypass toastr
      log: $log.log
    };

    return service;

    ////////////////

    function error(message, data, title) {
      if (service.showToasts) {
        toastr.error(message, title);
      }
      $log.error('Error:   ' + message, data);
    }

    function info(message, data, title) {
      if (service.showToasts) {
        toastr.info(message, title);
      }
      $log.info('Info:    ' + message, data);
    }

    function warning(message, data, title) {
      if (service.showToasts) {
        toastr.warning(message, title);
      }
      $log.warn('Warning: ' + message, data)
    }

    function success(message, data, title) {
      if (service.showToasts) {
        toastr.success(message, title);
      }
      $log.info('Success: ' + message, data);
    }
  }

})();

