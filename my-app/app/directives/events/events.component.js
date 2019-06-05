(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .component('eventsCmp', {
            templateUrl: 'app/directives/events/events.component.html',
            controller: EventsController
        });

    EventsController.$inject = ['$log'];

    function EventsController($log) {
        const $ctrl = this;

        $ctrl.onBlur = blur;
        $ctrl.onClick = click;
        $ctrl.onKeyPress = keypress;
        $ctrl.onMouseOver = mouseover;

        function blur() {
            $log.debug('Blur event fired');
        }

        function click() {
            $log.debug('Button clicked');
        }

        function keypress(event) {
            $log.debug('Key pressed: ' + event.key);
        }

        function mouseover(event) {
            $log.debug('Mouse coordinates ' + event.screenX + ' ' + event.screenY);
        }
    }
})();