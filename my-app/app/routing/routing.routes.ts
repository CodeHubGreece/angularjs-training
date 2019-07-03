(function() {
    'use strict';

    angular
        .module('myApp.routing')
        .config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state({
                name: 'users',
                url: '/users',
                component: 'users'
            })
            .state({
                name: 'userDetail',
                url: '/users/:id',
                component: 'userDetail'
            })
            .state({
                name: 'customers',
                url: '/customers',
                component: 'customers'
            });
    }
})();