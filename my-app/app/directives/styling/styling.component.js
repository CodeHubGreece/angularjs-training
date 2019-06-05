(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .component('stylingCmp', {
            templateUrl: 'app/directives/styling/styling.component.html',
            controller: StylingController
        });

    function StylingController() {
        const $ctrl = this;

        $ctrl.isEnabled = true;
        $ctrl.getColor = getColor;

        function getColor() {
            return $ctrl.isEnabled ? 'white' : 'lightgray';
        }
    }
})();