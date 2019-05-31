(function() {
    'use strict';

    angular
        .module('myApp.bindings')
        .component('interpolationCmp', {
            templateUrl: 'app/bindings/interpolation/interpolation.component.html',
            controller: InterpolationController
        });

    function InterpolationController() {
        var $ctrl = this;

        $ctrl.person = {
            name: 'John',
            age: 24
        };
        
        $ctrl.obj = {
            name: 'John',
            age: 24,
            toString: () => {
                return $ctrl.obj.name + ' is ' +  $ctrl.obj.age + ' years old';
            }
        };
    }
})();