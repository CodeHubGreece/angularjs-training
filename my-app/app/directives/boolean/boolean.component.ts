(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .component('boolCmp', {
            templateUrl: 'app/directives/boolean/boolean.component.html',
            controller: BooleanController
        });

    function BooleanController() {
        const $ctrl = this;

        $ctrl.isChecked = true;
        $ctrl.allowEdit = true;
    }
})();