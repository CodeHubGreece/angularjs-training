class ModelController {
    myVal = '';
    list = [
        { name: 'John', gender: 'male' },
        { name: 'Jackie', gender: 'female' },
        { name: 'Mary', gender: 'female' },
        { name: 'Adam', gender: 'male' }
    ];
    price = 1;
    cost = 10;
    onChange() {
        this.cost = (this.price * 0.24) + this.price;
    }
}
    
angular
    .module('myApp.directives')
    .component('modelCmp', {
        templateUrl: 'app/directives/model/model.component.html',
        controller: ModelController
    });
