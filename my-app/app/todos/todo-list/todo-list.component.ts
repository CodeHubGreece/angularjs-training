(function() {
    'use strict';

    angular
        .module('myApp.todos')
        .component('todoList', {
            templateUrl: 'app/todos/todo-list/todo-list.component.html',
            controller: TodoListController
        });

    TodoListController.$inject = ['todoService'];
    
    function TodoListController(todoService) {
        const $ctrl = this;

        $ctrl.todos = [];
        $ctrl.$onInit = onInit;

        function onInit() {
            getTodos();
        }

        function getTodos() {
            return todoService.getTodos().then(todos => {
                $ctrl.todos = todos;
                return $ctrl.todos;
            });
        }
    }
})();