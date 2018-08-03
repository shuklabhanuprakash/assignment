var app = angular.module('assignment');
app.controller('ListController', function($rootScope, $scope, $http, $location,
		$state, dataFactory) {

	$scope.empList = [];
	   $scope.smartTablePageSize = 10;
	const loadEmployeeListData = function() {

		var promise = dataFactory.data("GET", "json/restaurant.json");

		promise.then(function success(data) {
			console.log(data);
			$scope.restaurantList = data;
		}, function error() {
		})

	}
	
	$scope.init = function(){
		
		loadEmployeeListData();
	}

});
