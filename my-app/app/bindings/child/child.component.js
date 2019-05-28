(function() {
    'use strict';

    angular
        .module('myApp.bindings')
        .component('childCmp', {
            templateUrl: 'app/bindings/child/child.component.html',
            controller: ChildController,
            bindings: {
                item: '=',
                comment: '@'
            }
        });

    function ChildController() {
        const $ctrl = this;

        $ctrl.updateItem = updateItem;
        
        function updateItem() {
            $ctrl.item = {
                count: $ctrl.item.count + 1
            };
        }
    }
})();