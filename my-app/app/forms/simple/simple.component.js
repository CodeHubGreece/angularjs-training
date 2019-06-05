(function() {
    'use strict';

    angular
        .module('myApp.forms')
        .component('simpleCmp', {
            templateUrl: 'app/forms/simple/simple.component.html',
            controller: SimpleFormController
        });

    function SimpleFormController() {
        const $ctrl = this;

        $ctrl.users = [];
        $ctrl.user = '';
        $ctrl.submit = submit;

        function submit() {
            $ctrl.users.push($ctrl.user);
            $ctrl.user = '';
        }
    }
})();