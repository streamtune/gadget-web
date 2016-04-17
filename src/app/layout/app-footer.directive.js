/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('appFooter', appFooter);

  appFooter.$inject = [];

  /* @ngInject */
  function appFooter() {
    var directive = {
      bindToController: true,
      controller: AppFooterController,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      templateUrl: 'app/layout/app-footer.html'
    };
    return directive;
  }

  AppFooterController.$inject = [];

  /* @ngInject */
  function AppFooterController() {

  }

})();

