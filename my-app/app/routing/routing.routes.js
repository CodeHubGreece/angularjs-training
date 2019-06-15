(function() {
    'use strict';

    angular
        .module('myApp.routing')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider.state({
            name: 'users',
            url: '/users',
            component: 'users'
        });

        $stateProvider.state({
            name: 'customers',
            url: '/customers',
            component: 'customers'
        });
    }
})();