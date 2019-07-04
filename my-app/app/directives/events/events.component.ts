class EventsController {
    
    constructor(private $log: angular.ILogService) {}

    onBlur() {
        this.$log.debug('Blur event fired');
    }

    onClick() {
        this.$log.debug('Button clicked');
    }

    onKeyPress(event: JQuery.KeyPressEvent) {
        this.$log.debug('Key pressed: ' + event.key);
    }

    onMouseOver(event: JQuery.MouseOverEvent) {
        this.$log.debug('Mouse coordinates ' + event.screenX + ' ' + event.screenY);
    }
}

angular
    .module('myApp.directives')
    .component('eventsCmp', {
        templateUrl: 'app/directives/events/events.component.html',
        controller: EventsController
    });