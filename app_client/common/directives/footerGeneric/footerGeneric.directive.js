/**
 * Created by Jono on 16 05 10.
 */

(function () {
    angular
        .module('joMeanApp')
        .directive('footerGeneric', footerGeneric);
    function footerGeneric() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/footerGeneric/footerGeneric.template.html'
        };
    }
})();

