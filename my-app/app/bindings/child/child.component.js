(function() {
    'use strict';

    angular
        .module('myApp.bindings')
        .component('childCmp', {
            templateUrl: 'app/bindings/child/child.component.html',
            controller: ChildController,
            bindings: {
                item: '<',
                comment: '@',
                onUpdate: '&'
            }
        });

    ChildController.$inject = ['logger'];

    function ChildController(logger) {
        const $ctrl = this;

        $ctrl.updateItem = updateItem;
        
        function updateItem() {
            $ctrl.item = {
                count: $ctrl.item.count + 1
            };
            $ctrl.onUpdate({item: $ctrl.item});
            logger.info('Item updated');
        }
    }
})();