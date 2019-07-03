describe('todoService', () => {
    let service;
    let httpBackend;
    let url;
    const fakeTodo = {
        id: 1,
        title: 'Fake todo'
    };

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject((_$httpBackend_, _todoService_, _apiUrl_) => {
        service = _todoService_;
        httpBackend = _$httpBackend_;
        
        url = _apiUrl_ + '/todos';
    }));

    it('should be registered', () => {
        expect(service).not.toEqual(null);
    });

    describe('getTodos function', () => {
        it('should exist', () => {
            expect(service.getTodos).not.toEqual(null);
        });
        
        it('should get a list of todos', () => {
            httpBackend.expectGET(url).respond(200);

            service.getTodos();
            httpBackend.flush();
        });
    });

    describe('create function', () => {
        it('should exist', () => {
            expect(service.create).not.toEqual(null);
        });
        
        it('should create a new todo', () => {
            httpBackend.expectPOST(url, fakeTodo).respond(200);

            service.createTodo(fakeTodo);
            httpBackend.flush();
        });
    });

    describe('getTodo function', () => {
        it('should exist', () => {
            expect(service.getTodo).not.toEqual(null);
        });
        
        it('should get a todo', () => {
            httpBackend.expectGET(url + '/' + fakeTodo.id).respond(200);
            
            service.getTodo(fakeTodo.id);
            httpBackend.flush();
        });
    });
});