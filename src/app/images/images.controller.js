/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .controller('ImagesController', ImagesController);

  ImagesController.$inject = ['imagesService', 'logger'];

  /* @ngInject */
  function ImagesController(imagesService, logger) {
    var vm = this;

    vm.images = undefined;

    activate();

    ////////////////

    function activate() {
      loadImages();
    }

    function loadImages() {
      imagesService.getImages().then(imagesLoaded).catch(imagesLoadingFailed);
    }

    function imagesLoaded(data) {
      vm.images = data;
    }

    function imagesLoadingFailed(error) {
      logger.error("Failed to load images", { error: error });
    }
  }

})();
