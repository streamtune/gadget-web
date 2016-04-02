/**
 * Created by mauro on 02/04/16.
 */
(function () {
    'use strict';

    angular
        .module('app.layout')
        .config(translationConfig);

        translationConfig.$inject = ['$translateProvider'];

        /* @ngInject */
        function translationConfig($translateProvider) {
            $translateProvider.translations('en', {
              LAYOUT: {
                TOGGLE_NAVIGATION: 'Toggle Navigation',
                HOME: 'Home',
                ABOUT: 'About',
                CONTACT: 'Contact'
              }
            });
        }
})();