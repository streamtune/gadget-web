/**
 * Created by mauro on 01/04/16.
 */
(function () {
  'use strict';

  var config = {
    appErrorPrefix: '[Gadget Error] ',
    appTitle: 'Gadget',
    version: '1.0.0'
  };

  angular
    .module('app.core')
    .config(toastrConfig)
    .value('config', config)
    .config(configureCore)

    configureCore.$inject = ['$logProvider', 'routeHelperProvider', 'exceptionHandlerProvider'];

    /* @ngInject */
    function configureCore ($logProvider, routeHelperProvider, exceptionHandlerProvider) {
      // turn debugging off/on (no info or warn)
      if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
      }

      // Configure the common route provider
      routeHelperProvider.configure(config.appTitle);

      // Configure the common exception handler
      exceptionHandlerProvider.configure(config.appErrorPrefix);
    }

    toastrConfig.$inject = ['toastrConfig'];

    /* @ngInject */
    function toastrConfig(toastrConfig) {
        angular.extend(toastrConfig, {
          timeOut: 4000,
          positionClass: 'toast-bottom-right'
        });
    }
})();
