(function() {
    'use strict';

    angular
        .module('myApp.core')
        .service('httpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$q'];
    
    function HttpInterceptor($q) {
        this.request = handleRequest;
        this.response = handleResponse;
        this.requestError = handleReqError;
        this.responseError = handleRespError;

        function handleRequest(config) {
            return config;
        }

        function handleResponse(response) {
            return response;
        }

        function handleReqError(rejection) {
            return $q.reject(rejection);
        }

        function handleRespError(rejection) {
            return $q.reject(rejection);
        }
    }
})();