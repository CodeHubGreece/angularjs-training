class PrimitiveController {
    price = 10.50;
    today = Date.now();
    obj = {
        name: 'John',
        age: 24
    };
}

angular
    .module('myApp.filters')
    .component('primitiveCmp', {
        templateUrl: 'app/filters/primitive/primitive.component.html',
        controller: PrimitiveController
    });