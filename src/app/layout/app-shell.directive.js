/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('appShell', appShell);

  appShell.$inject = ['logger'];

  /* @ngInject */
  function appShell(logger) {
    var directive = {
      bindToController: true,
      controller: AppShellController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/layout/app-shell.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  AppShellController.$inject = ['logger'];

  /* @ngInject */
  function AppShellController(logger) {

  }

})();

