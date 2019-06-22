describe('routing', () => {
    describe('state', () => {
        let state;

        beforeEach(angular.mock.module('myApp'));
        
        beforeEach(inject((_$state_) => {
            state = _$state_;
        }));

        describe('users', () => {
            beforeEach(() => currentState = state.get('users'));

            it('should map to users component', () => {
                expect(currentState.component).toEqual('users');
            });

            it('should set url', () => {
                expect(currentState.url).toEqual('/users');
            });
        });

        describe('userDetail', () => {
            beforeEach(() => currentState = state.get('userDetail'));

            it('should map to user detail component', () => {
                expect(currentState.component).toEqual('userDetail');
            });

            it('should set url', () => {
                expect(currentState.url).toEqual('/users/:id');
            });
        });

        describe('customers', () => {
            beforeEach(() => currentState = state.get('customers'));

            it('should map to customers component', () => {
                expect(currentState.component).toEqual('customers');
            });

            it('should set url', () => {
                expect(currentState.url).toEqual('/customers');
            });
        });
    });
});