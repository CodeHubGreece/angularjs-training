(function() {
    'use strict';

    angular
        .module('myApp.routing')
        .component('users', {
            templateUrl:'app/routing/users/users.component.html',
            controller: UsersController
        });

    function UsersController() {
        const $ctrl = this;

        $ctrl.users = ['John', 'Jackie', 'Mary', 'Adam'];
    }
})();