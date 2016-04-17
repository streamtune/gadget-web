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

    configureCore.$inject = ['$logProvider', '$translateProvider', 'routeHelperProvider', 'exceptionHandlerProvider'];

    /* @ngInject */
    function configureCore($logProvider, $translateProvider, routeHelperProvider, exceptionHandlerProvider) {
      // turn debugging off/on (no info or warn)
      if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
      }

      // Configure the common route provider
      routeHelperProvider.configure(config.appTitle);

      // Configure the common exception handler
      exceptionHandlerProvider.configure(config.appErrorPrefix);

      // Configure default translations
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/app/{part}/i18n/{lang}.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('sanitize');
    }

    toastrConfig.$inject = ['toastr'];

    /* @ngInject */
    function toastrConfig(toastr) {
      toastr.options.timeOut = 4000;
      toastr.options.positionClass = 'toast-bottom-right';
    }
})();
