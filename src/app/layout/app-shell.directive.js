/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('appShell', appShell);

  appShell.$inject = [];

  /* @ngInject */
  function appShell() {
    var directive = {
      bindToController: true,
      controller: AppShellController,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      templateUrl: 'app/layout/app-shell.html'
    };
    return directive;
  }

  AppShellController.$inject = [];

  /* @ngInject */
  function AppShellController() {

  }

})();

