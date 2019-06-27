(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(configure);

    function configure($compileProvider, $logProvider, $httpProvider) {
        // enable in production
        // $compileProvider.debugInfoEnabled(false);
        // $logProvider.debugEnabled(false);
        
        $httpProvider.interceptors.push('httpInterceptor');
    }
})();