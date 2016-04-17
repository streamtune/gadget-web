/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .config(translationConfig);

  translationConfig.$inject = ['$translatePartialLoaderProvider'];

  /* @ngInject */
  function translationConfig($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('layout');
  }
})();
