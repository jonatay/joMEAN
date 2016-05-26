(function () {
    angular
        .module('joMeanApp')
        .controller('navigationCtrl', navigationCtrl);
    
    navigationCtrl.$inject = ['$location', '$uibModal', 'authentication'];
    
    function navigationCtrl($location, $uibModal, authentication) {
        var vm = this;

        vm.currentPath = $location.path();

        vm.isLoggedIn = authentication.isLoggedIn();

        vm.currentUser = authentication.currentUser();

        vm.logout = function () {
            authentication.logout();
            $location.path('/');
        };

        vm.popupLoginForm = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/auth/loginModal/loginModal.view.html',
                controller: 'loginModalCtrl as vm'
            });

            modalInstance.result.then(function (data) {
                
            });
        };

    }
})();