(function() {
    'use strict';

    angular
        .module('myApp.hooks')
        .component('initCmp', {
            templateUrl: 'app/hooks/init/init.component.html',
            controller: InitController,
            bindings: {
                item: '@'
            }
        });

    function InitController() {
        const $ctrl = this;
        
        $ctrl.itemA = $ctrl.item || '<empty>';
        
        $ctrl.$onInit = onInit;

        function onInit() {
            $ctrl.itemB = $ctrl.item;
        }
    }
})();