/**
 * Created by mauro on 01/04/16.
 */
(function () {
  'use strict';

  angular
    .module('blocks.route')
    .provider('routeHelper', routeHelperProvider);

  routeHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function routeHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    var appTitle = undefined;

    /* jshint validthis: true */
    this.$get = RouteHelper;

    $locationProvider.html5Mode(true);

    this.configure = function (title) {
      appTitle = title;
    };

    RouteHelper.$inject = ['$state', '$rootScope', '$location', '$translate', 'logger'];

    function RouteHelper($state, $rootScope, $location, $translate, logger) {
      var hasOtherwise = false;
      var handlingRouteChangeError = false;
      var routeCounts = {
        errors: 0,
        changes: 0
      };

      var service = {
        configureStates: configureStates,
        getStates: getStates,
        routeCounts: routeCounts
      };

      init();

      return service;

      ///////////////

      function updateDocTitle() {
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
          routeCounts.changes++;
          handlingRouteChangeError = false;
          $translate((toState.data && toState.data.title) || '').then(function (translatedTitle) {
            $rootScope.title = appTitle + ' - ' + translatedTitle; // data bind to <title>
          });
        });
      }

      function handleRoutingErrors() {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
          if (handlingRouteChangeError) {
            return;
          }
          routeCounts.errors++;
          handlingRouteChangeError = true;
          var destination = (fromState && (fromState.data.title || fromState.name)) || 'unknown target';
          var msg = 'Error routing to ' + destination + '. ' + (error.msg || '');
          logger.warning(msg, [fromState]);
          $location.path('/dashboard');
        });
      }

      function init() {
        handleRoutingErrors();
        updateDocTitle();
      }

      function configureStates(states, otherwisePath) {
        states.forEach(function (state) {
          $stateProvider.state(state.state, state.config);
        });
        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      function getStates() {
        return $state.get();
      }
    }
  }
})();
