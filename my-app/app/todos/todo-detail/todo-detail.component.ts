(function() {
    'use strict';

    angular
        .module('myApp.todos')
        .component('todoDetail', {
            templateUrl: 'app/todos/todo-detail/todo-detail.component.html',
            controller: TodoDetailController
        });

    TodoDetailController.$inject = ['todoService'];

    function TodoDetailController(todoService) {
        const $ctrl = this;

        $ctrl.todo = null;
        $ctrl.$onInit = onInit;
        $ctrl.save = createTodo;

        function onInit() {
            getTodo(5);
        }

        function getTodo(id) {
            return todoService.getTodo(id).then(todo => {
                $ctrl.todo = todo;
                return $ctrl.todo;
            });
        }

        function createTodo() {
            const newTodo = JSON.stringify({
                title: 'New todo item',
                body: 'My todo',
                userId: 1
            })
            return todoService.createTodo(newTodo).then(todo => {
                alert(todo.title + ' created');
            });
        }
    }
})();