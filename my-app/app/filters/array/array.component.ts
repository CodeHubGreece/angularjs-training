 class ArrayController {
    list = [
        { name: 'John', gender: 'male' },
        { name: 'Jackie', gender: 'female' },
        { name: 'Mary', gender: 'female' },
        { name: 'Adam', gender: 'male' }
    ]
    person = {
        name: 'John',
        age: 24,
        gender: 'male'
    };
}

angular
    .module('myApp.filters')
    .component('arrayCmp', {
        templateUrl: 'app/filters/array/array.component.html',
        controller: ArrayController
    });