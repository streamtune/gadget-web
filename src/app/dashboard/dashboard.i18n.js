/**
 * Created by mauro on 02/04/16.
 */
(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(translationConfig);

        translationConfig.$inject = ['$translateProvider'];

        /* @ngInject */
        function translationConfig($translateProvider) {
            $translateProvider.translations('en', {
              DASHBOARD: {
                TITLE: 'Dashboard'
              }
            });
        }
})();
