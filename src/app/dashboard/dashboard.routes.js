/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .run(runDashboard)

  runDashboard.$inject = ['routeHelper'];

  /* @ngInject */
  function runDashboard(routeHelper) {
    routeHelper.configureStates(getStates(), '/dashboard');
  }

  function getStates() {
    return [{
      state: 'dashboard',
      config: {
        url: '/dashboard',
        template: '<h1>Dashboard</h1>',
        data: {
          title: 'DASHBOARD.TITLE'
        }
      }
    }];
  }
})();
