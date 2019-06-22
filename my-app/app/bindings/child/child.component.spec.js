describe('component: childCmp', () => {
    let component;
    let updateSpy;
    let item ;
    let comment;
    let logger;
    
    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject((_$componentController_, _logger_) => {
        item = {
            count: 1
        };
        comment = 'This is a comment';
        updateSpy = jasmine.createSpy('updateSpy');
        logger = _logger_;

        spyOn(logger, 'info');

        component = _$componentController_('childCmp', null, {
            item,
            comment,
            onUpdate: updateSpy
        });
    }));
    
    it('should expose an `item` object', () => {
        expect(component.item).toBeDefined();
        expect(component.item).toEqual(item);
    });

    it('should expose a `comment` string', () => {
        expect(component.comment).toBeDefined();
        expect(component.comment).toEqual(comment);
    });

    it('should call onUpdate', () => {
        component.onUpdate();

        expect(updateSpy).toHaveBeenCalled();
    });
    
    it('should update an item', () => {
        component.updateItem();
        
        expect(component.item.count).toBe(2);
        expect(logger.info).toHaveBeenCalledWith('Item updated');
        expect(updateSpy).toHaveBeenCalledWith({ item: component.item });
    });
});