angular.module('myApp',['ui.router','ngMaterial','ngMessages','angularUtils.directives.dirPagination'])
.controller('BarCtrl', function($scope, $mdSidenav) {
    $scope.showMobileMainHeader = true;
    $scope.openSideNavPanel = function() {
        $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
});
