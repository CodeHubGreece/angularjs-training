(function() {
    'use strict';

    angular
        .module('myApp.filters')
        .filter('keyvalue', KeyValue);

    function KeyValue() {
        return KeyValueFilter;

        function KeyValueFilter(params) {
            let results = [];

            for(let propName in params) {
                results.push({
                    key: propName,
                    value: params[propName]
                });
            }

            return results;
        }
    }
})();