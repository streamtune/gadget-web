/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .factory('imagesService', imagesService);

  imagesService.$inject = ['$q', 'mockImages'];

  /* @ngInject */
  function imagesService($q, mockImages) {
    var service = {
      getImages: getImages
    };
    return service;

    ////////////////

    function getImages() {
      var deferred = $q.defer();
      deferred.resolve(mockImages);
      return deferred.promise;
    }
  }

})();

