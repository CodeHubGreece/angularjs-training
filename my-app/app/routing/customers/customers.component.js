(function() {
    'use strict';

    angular
        .module('myApp.routing')
        .component('customers', {
            templateUrl:'app/routing/customers/customers.component.html',
            controller: CustomersController
        });

    function CustomersController() {
        const $ctrl = this;

        $ctrl.customers = ['Profile', 'Code.Hub', 'Angular', 'Τρία Κιλά Κώδικα'];
    }
})();