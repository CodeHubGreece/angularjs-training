describe('component: todoList', () => {
    let component;
    let scope;
    let fakeTodos = [ 1, 2];

    beforeEach(() => angular.mock.module('myApp'));

    beforeEach(inject((_$componentController_, _$rootScope_, _$q_, _todoService_) => {
        todoService = _todoService_;
        scope = _$rootScope_.$new();

        spyOn(_todoService_, 'getTodos').and.returnValue(_$q_.resolve(fakeTodos))

        component = _$componentController_('todoList', {$scope: scope }, {});
    }));

    describe('$onInit', () => {
        it('should exist', () => {
            expect(component.$onInit).toBeTruthy();
        });

        it('should set todos', () => {
            component.$onInit();
            scope.$apply();
            expect(component.todos).toEqual(fakeTodos);
        });
    });
});