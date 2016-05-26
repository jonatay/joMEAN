(function () {
    angular
        .module('joMeanApp')
        .directive('pageHeader', pageHeader);
    function pageHeader () {
        return {
            restrict: 'EA',
            scope: {
                content : '=content'
            },
            templateUrl: '/common/directives/pageHeader/pageHeader.template.html'
        };
    }
})();