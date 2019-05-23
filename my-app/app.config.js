(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(configure);

    function configure($compileProvider, $logProvider) {
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(false);
    }
})();