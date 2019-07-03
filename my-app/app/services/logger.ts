(function() {
    'use strict';

    angular
        .module('myApp.services')
        .service('logger', Logger);

    function Logger() {
        this.info = info;

        function info(msg) {
            console.info(msg);
        }
    }
})();