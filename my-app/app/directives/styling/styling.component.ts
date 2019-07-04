class StylingController {
    isEnabled = true;

    getColor() {
        return this.isEnabled ? 'white' : 'lightgray';
    }
}

angular
    .module('myApp.directives')
    .component('stylingCmp', {
        templateUrl: 'app/directives/styling/styling.component.html',
        controller: StylingController
    });