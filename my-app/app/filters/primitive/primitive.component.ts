(function() {
    'use strict';

    angular
        .module('myApp.filters')
        .component('primitiveCmp', {
            templateUrl: 'app/filters/primitive/primitive.component.html',
            controller: PrimitiveController
        });

    function PrimitiveController() {
        var $ctrl = this;
        
        $ctrl.price = 10.50;
        $ctrl.today = Date.now();
        $ctrl.obj = {
            name: 'John',
            age: 24
        };
    }
})();