class SimpleFormController {
    users = [];
    user = '';

    submit(form: angular.IFormController) {
        if (form.$invalid) {
            return;
        }
        
        form.$setPristine();
        form.$setUntouched();

        this.users.push(this.user);
        this.user = '';
    }
}

angular
    .module('myApp.forms')
    .component('simpleCmp', {
        templateUrl: 'app/forms/simple/simple.component.html',
        controller: SimpleFormController
    });