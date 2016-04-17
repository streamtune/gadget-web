(function () {
  'use strict';

  angular
    .module('app.layout')
    .run(runLayout);

    runLayout.$inject = ['$'];

    /* @ngInject */
    function runLayout($) {
        $.material.init();
    }
})();
