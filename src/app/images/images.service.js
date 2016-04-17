/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .factory('imagesService', imagesService);

  imagesService.$inject = ['$http', '_'];

  /* @ngInject */
  function imagesService($http, _) {
    var service = {
      getImages: getImages,
      getImageByRepoTag: getImageByRepoTag
    };
    return service;

    ////////////////

    /**
     * Retrieve the list of images available in current docker machine.
     *
     * @returns {Promise} - The promise over the result that return the data once resolved.
     */
    function getImages() {
      return $http.get('/api/v1/images').then(function (result) {
        _.forEach(result.data, function (image) {
          var blobJson = angular.fromJson(image.Blob.Summary);
          image.CreatedAt = blobJson.Created * 1000;
          image.VirtualSize = blobJson.VirtualSize;
        });
        return result.data;
      });
    }

    /**
     * Retrieve a single image by his repository tag.
     *
     * @param {String} repo the repository
     * @param tag
     * @returns {*}
       */
    function getImageByRepoTag(repo, tag) {
      return $http.get('/api/v1/images/' + repo + '/' + tag).then(function (result) {
        return result.data;
      });
    }
  }

})();

