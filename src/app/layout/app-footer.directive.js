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
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/layout/app-footer.html'
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  AppFooterController.$inject = [];

  /* @ngInject */
  function AppFooterController() {

  }

})();

