(function() {
    'use strict';

    angular
        .module('myApp')
        .component('myCmp', {
            templateUrl: '/app/app.component.html',
            controller: AppController
        });

    function AppController() {}
})();