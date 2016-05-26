(function () {

    angular
        .module('joMeanApp')
        .controller('employeesCtrl', employeesCtrl);

    employeesCtrl.$inject = ['$scope', 'joMeanData'];

    function employeesCtrl($scope, joMeanData) {
        var vm = this;
        vm.pageHeader = {
            title: 'joMeanApp',
            strapline: 'working'
        };
        vm.sidebar = {
            content: "sidebar"
        };
        vm.message = "";

        vm.getData = function () {
            // joMeanData.locationByCoords(lat, lng)
            //     .success(function (data) {
            //         vm.message = data.length > 0 ? "" : "No locations found nearby";
            //         vm.data = {locations: data};
            //     })
            //     .error(function (e) {
            //         vm.message = "Sorry, something's gone wrong";
            //     });
            joMeanData.employeesList()
                .success(function(data) {
                    vm.employees = data;
                });
        };
        vm.showError = function (error) {
            $scope.$apply(function () {
                vm.message = error.message;
            });
        };
        vm.init = function() {
            vm.getData();
        }
        // geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);
    }

})();