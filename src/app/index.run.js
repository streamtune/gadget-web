(function() {
  'use strict';

  angular
    .module('gadgetWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
