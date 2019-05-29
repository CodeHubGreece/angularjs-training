(function() {
    'use strict';

    angular
        .module('myApp.hooks')
        .component('changesCmp', {
            templateUrl: 'app/hooks/changes/changes.component.html',
            controller: ChangesController,
            bindings: {
                item: '<'
            }
        });

    function ChangesController() {
        const $ctrl = this;
        
        $ctrl.chng = null;
        $ctrl.$onChanges = onChanges;

        function onChanges(changesObj) {
            for(let propName in changesObj) {
                const chng = changesObj[propName];
                
                if (!chng.isFirstChange()) {
                    $ctrl.chng = chng;
                }
            }
        }
    }
})();