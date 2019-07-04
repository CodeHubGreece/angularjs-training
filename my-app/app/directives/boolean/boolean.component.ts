class BooleanController {
    isChecked = true;
    allowEdit = true;
}

angular
    .module('myApp.directives')
    .component('boolCmp', {
        templateUrl: 'app/directives/boolean/boolean.component.html',
        controller: BooleanController
    });