/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .controller('ImagesController', ImagesController);

  ImagesController.$inject = ['imagesService', 'logger', 'NgTableParams'];

  /* @ngInject */
  function ImagesController(imagesService, logger, NgTableParams) {
    var vm = this;

    vm.tableParams = new NgTableParams({
      count: 10
    });

    activate();

    ////////////////

    function activate() {
      loadImages();
    }

    function loadImages() {
      imagesService.getImages().then(imagesLoaded).catch(imagesLoadingFailed);
    }

    function imagesLoaded(data) {
      vm.tableParams.settings({ data: data });
    }

    function imagesLoadingFailed(error) {
      logger.error("Failed to load images", { error: error });
    }
  }

})();
