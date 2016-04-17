/* global toastr:false moment:false _:false $:false*/
(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('_', _)
    .constant('$', $)
    .constant('toastr', toastr)
    .constant('moment', moment);
})();
