/**
 * Created by Jono on 16 05 06.
 */

(function () {
    angular
        .module('joMeanApp')
        .directive('ratingStars', ratingStars);
    function ratingStars() {
        return {
            restrict: 'EA',
            scope: {
                thisRating: '=rating'
            },
            templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
        };
    }
})();