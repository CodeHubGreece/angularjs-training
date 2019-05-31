(function() {
    'use strict';

    angular
        .module('myApp.filters')
        .component('arrayCmp', {
            templateUrl: 'app/filters/array/array.component.html',
            controller: ArrayController
        });

    function ArrayController() {
        var $ctrl = this;
        
        $ctrl.list = [
            { name: 'John', gender: 'male' },
            { name: 'Jackie', gender: 'female' },
            { name: 'Mary', gender: 'female' },
            { name: 'Adam', gender: 'male' }
        ]
        $ctrl.person = {
            name: 'John',
            age: 24,
            gender: 'male'
        };
    }
})();