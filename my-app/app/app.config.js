(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(configure);

    function configure($compileProvider, $logProvider) {
        // enable in production
        // $compileProvider.debugInfoEnabled(false);
        // $logProvider.debugEnabled(false);
    }
})();