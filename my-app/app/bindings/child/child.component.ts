class ChildController {
    
    item: any;
    onUpdate: any;

    constructor(private logger: any) {}
    
    updateItem() {
        this.item = {
            count: this.item.count + 1
        };
        this.onUpdate({item: this.item});
        this.logger.info('Item updated');
    }
}

angular
    .module('myApp.bindings')
    .component('childCmp', {
        templateUrl: 'app/bindings/child/child.component.html',
        controller: ChildController,
        bindings: {
            item: '<',
            comment: '@',
            onUpdate: '&'
        }
    });