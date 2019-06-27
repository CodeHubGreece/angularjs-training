(function() {
    'use strict';

    angular
        .module('myApp.security')
        .component('echo', {
            templateUrl: 'app/security/echo/echo.component.html',
            controller: EchoController
        });

    EchoController.$inject = ['$sce'];

    function EchoController($sce) {
        const $ctrl = this;
        $ctrl.content;

        $ctrl.getContent = () => {
            return $sce.trustAsHtml($ctrl.content);
        }
    }
})();