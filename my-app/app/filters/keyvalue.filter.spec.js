describe('keyvalue', () => {
    let filter;
    
    beforeEach(angular.mock.module('myApp'));
    
    beforeEach(inject((_$filter_) => {
        filter = _$filter_;
    }));
    
    it('should return empty array', () => {
        const obj = {};
        expect(filter('keyvalue')(obj)).toEqual([]);
    });

    it('should return array of key values', () => {
        const obj = {
            name: 'John',
            age: 24
        };
        expect(filter('keyvalue')(obj)).toEqual([
            { key: 'name', value: 'John' },
            { key: 'age', value: 24 }
        ]);
    });
});