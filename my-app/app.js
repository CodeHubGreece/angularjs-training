(function() {
    'use strict';
    
    angular
        .module('myApp')
        .run(runBlock);

    function runBlock($log) {
        $log.debug('Hello World');
    }
})();