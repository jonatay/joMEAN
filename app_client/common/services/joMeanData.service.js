/**
 * Created by Jono on 16 05 06.
 */
(function () {
    angular
        .module('joMeanApp')
        .service('joMeanData', joMeanData);

    joMeanData.$inject = ['$http'];//, 'authentication'];

    //** service joMeanData **//
    function joMeanData($http) { //}, authentication) {

        var employeesList = function () {
            return $http.get('/api/employees');
        };

        return {
            employeesList: employeesList
        };
    }
})();
