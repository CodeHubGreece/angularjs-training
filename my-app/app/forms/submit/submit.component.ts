(function() {
    'use strict';

    angular
        .module('myApp.forms')
        .component('submitCmp', {
            templateUrl: 'app/forms/submit/submit.component.html',
            controller: SubmitFormController
        });

    SubmitFormController.$inject = ['$timeout'];

    function SubmitFormController($timeout) {
        const $ctrl = this;

        $ctrl.users = [];
        $ctrl.user = '';
        $ctrl.submit = submit;
        $ctrl.submitted = false;

        function submit() {
            $ctrl.submitted = true;
            $ctrl.users.push($ctrl.user);
            $ctrl.user = '';

            $timeout(() => $ctrl.submitted = false);
        }
    }
})();