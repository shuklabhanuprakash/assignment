

var app = angular.module('assignment');
app.controller('MainController',
  function($rootScope, $scope, $http, $location,$state) {
	
	
	$scope.init = function(){
		
		$state.go("home.dashboard");
	console.log("1")
	}
	
	
});