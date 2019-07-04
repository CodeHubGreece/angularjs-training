class InterpolationController {
    person = {
        name: 'John',
        age: 24
    };
    
    obj = {
        name: 'John',
        age: 24,
        toString: () => {
            return this.obj.name + ' is ' +  this.obj.age + ' years old';
        }
    };
}

angular
    .module('myApp.bindings')
    .component('interpolationCmp', {
        templateUrl: 'app/bindings/interpolation/interpolation.component.html',
        controller: InterpolationController
    });