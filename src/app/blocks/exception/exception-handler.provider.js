/**
 * Created by mauro on 01/04/16.
 */
(function () {
  'use strict';

  angular
    .module('blocks.exception')
    .provider('exceptionHandler', exceptionHandlerProvider)
    .config(exceptionHandlerConfig);

  function exceptionHandlerProvider() {
    /* jshint validthis: true */
    this.config = {
      appErrorPrefix: undefined
    };

    this.configure = function (appErrorPrefix) {
      this.config.appErrorPrefix = appErrorPrefix;
    };

    this.$get = function () {
      return {
        config: this.config
      };
    };
  }

  exceptionHandlerConfig.$inject = ['$provide'];

  /* @ngInject */
  function exceptionHandlerConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];

  /* @ngInject */
  function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return function (exception, cause) {
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      var errorData = { exception: exception, cause: cause };
      exception.message = appErrorPrefix + exception.message;
      /**
       * Could add the error to a service's collection, add errors to $rootScope, log errors to remote web server, or
       * log locally. Or throw hard. It is entirely up to you.
       */
      $delegate(exception, cause);
      logger.error(exception.message, errorData);
    };
  }
})();
