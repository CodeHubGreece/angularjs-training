class ParentController {
    item = {
        count: 1
    };
    comment = 'Copyright @2019 myApp';
}

angular
    .module('myApp.bindings')
    .component('parentCmp', {
        templateUrl: 'app/bindings/parent/parent.component.html',
        controller: ParentController
    });