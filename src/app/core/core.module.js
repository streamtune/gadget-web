/**
 * Created by mauro on 01/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.core', [
      /*
       * Angular modules
       */
      'ngAnimate',
      'ngSanitize',
      'ngResource',
      /*
       * Our reusable cross app code modules
       */
      'blocks.exception',
      'blocks.logger',
      'blocks.route',
      /*
       * 3rd Party modules
       */
      'ui.bootstrap',
      'pascalprecht.translate'
    ]);

})();
