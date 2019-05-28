(function() {
    'use strict';

    angular
        .module('myApp.bindings')
        .component('parentCmp', {
            templateUrl: 'app/bindings/parent/parent.component.html',
            controller: ParentController
        });

    function ParentController() {
        const $ctrl = this;
        
        $ctrl.item = {
            count: 1
        };
    }
})();