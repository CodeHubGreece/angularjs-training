(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .component('modelCmp', {
            templateUrl: 'app/directives/model/model.component.html',
            controller: ModelController
        });

    function ModelController() {
        const $ctrl = this;

        $ctrl.myVal = '';
        $ctrl.list = [
            { name: 'John', gender: 'male' },
            { name: 'Jackie', gender: 'female' },
            { name: 'Mary', gender: 'female' },
            { name: 'Adam', gender: 'male' }
        ];
        $ctrl.price = 1;
        $ctrl.cost = 10;
        $ctrl.onChange = change;

        function change() {
            $ctrl.cost = ($ctrl.price * 0.24) + $ctrl.price;
        }
    }
})();