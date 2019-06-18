(function() {
    'use strict';

    angular
        .module('myApp.routing')
        .component('userDetail', {
            template: '<h4>Hello, I am user with ID: <b> {{$ctrl.id}} </b><h4>',
            controller: UserDetailController,
            bindings: {
                $transition$: '<',
            }
        });

    function UserDetailController() {
        const $ctrl = this;
        
        $ctrl.id = null;
        
        $ctrl.$onInit = () => {
            $ctrl.id = $ctrl.$transition$.params().id;
        }
    }
})();