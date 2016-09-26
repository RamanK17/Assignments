angular.module('myApp')
.controller('AppCtrl', function($scope) {
    //$scope.showHints = true;
    $scope.user = {
      name:"",
      age:"",
      gender:"",
      company:"",
      email: "",
      phone: ""
    };
  });