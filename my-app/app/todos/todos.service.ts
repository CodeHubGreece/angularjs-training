(function() {
    'use strict';

    angular
        .module('myApp.todos')
        .service('todoService', TodoService);

    TodoService.$inject = ['apiUrl', '$resource'];

    function TodoService(apiUrl, $resource) {
        this.getTodos = getAll;
        this.getTodo = getSingle;
        this.createTodo = create;

        function getAll() {
            return $resource(apiUrl + '/todos').query().$promise;
        }

        function getSingle(id) {
            return $resource(apiUrl + '/todos/:todoId').get({todoId: id}).$promise;
        }

        function create(todo) {
            return $resource(apiUrl + '/todos').save(todo).$promise;
        }
    }
})();
