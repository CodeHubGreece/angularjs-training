class SubmitFormController {
    
    constructor(private $timeout: angular.ITimeoutService) {}

    users = [];
    user = '';
    submitted = false;

    submit() {
        this.submitted = true;
        this.users.push(this.user);
        this.user = '';

        this.$timeout(() => this.submitted = false);
    }
}

angular
    .module('myApp.forms')
    .component('submitCmp', {
        templateUrl: 'app/forms/submit/submit.component.html',
        controller: SubmitFormController
    });