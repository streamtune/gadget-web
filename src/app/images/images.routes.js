/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .run(runImages);

  runImages.$inject = ['routeHelper'];

  /* @ngInject */
  function runImages(routeHelper) {
    routeHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'images',
      config: {
        url: '/images',
        template: '<h1>Images List</h1>',
        data: {
          title: 'IMAGES.TITLE'
        }
      }
    }];
  }
})();
