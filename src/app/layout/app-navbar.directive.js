/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('appNavbar', appNavbar);

  appNavbar.$inject = [];

  /* @ngInject */
  function appNavbar() {
    var directive = {
      bindToController: true,
      controller: AppNavbarController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/layout/app-navbar.html'
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  AppNavbarController.$inject = ['config'];

  /* @ngInject */
  function AppNavbarController(config) {
    var vm = this;

    vm.title = config.appTitle;
  }

})();

