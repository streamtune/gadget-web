/**
 * Created by mauro on 01/04/16.
 */
/* global toastr:false moment:false */
(function () {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment);
})();
