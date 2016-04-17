(function () {
  'use strict';

  angular
    .module('app.admin')
    .factory('adminService', adminService);

  adminService.$inject = ['$http'];

  /* @ngInject */
  function adminService($http) {
    var service = {
      debug: debug,
      revive: revive,
      update: update
    };
    return service;

    ////////////////

    function debug(dbg) {
      $http.post('api/v1/admin/debug', { dbg: dbg });
    }

    function revive() {
      $http.post('api/v1/admin/revive');
    }

    function update() {
      $http.post('api/v1/admin/update');
    }
  }

})();


