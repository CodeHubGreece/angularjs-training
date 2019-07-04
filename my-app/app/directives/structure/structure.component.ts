class StructureController {
    list = [
        { name: 'John', gender: 'male' },
        { name: 'Jackie', gender: 'female' },
        { name: 'Mary', gender: 'female' },
        { name: 'Adam', gender: 'male' }
    ];
    person = {
        name: 'John',
        age: 24,
        gender: 'male'
    };
}

angular
    .module('myApp.directives')
    .component('structureCmp', {
        templateUrl: 'app/directives/structure/structure.component.html',
        controller: StructureController
    });