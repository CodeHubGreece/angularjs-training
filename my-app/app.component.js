(function() {
    'use strict';

    angular
        .module('myApp')
        .component('myCmp', {
            templateUrl: '/app.component.html',
            controller: AppController
        });

    function AppController() {}
})();