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

        $ctrl.users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jackie' },
            { id: 3, name: 'Mary' },
            { id: 4, name: 'Adam' }
        ];
    }
})();