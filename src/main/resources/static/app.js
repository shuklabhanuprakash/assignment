var app = angular.module('assignment', [ 'ui.router', 'ui.bootstrap',
		'ng-fusioncharts' ]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('home', {
		url : '/home',
		templateUrl : '/html/LandingPage.html',
		access : {
			requiresLogin : true,
			requiredPermissions : [ 'ADMIN', 'USER' ],
			permissionType : 'AtLeastOne'
		}
	}), $stateProvider.state('home.dashboard', {
		url : '/dashboard',
		templateUrl : '/html/dashboard.html'
	}), $stateProvider.state('login', {
		url : '/login',
		templateUrl : 'login.html',
		access : {
			requiresLogin : false
		}
	})

});



app.factory('dataFactory', function($http, $q) {
	return {
		data : function(method, url, data) {

			var deferred = $q.defer();
			var req = {
				method : method,
				url : url,
				headers : {
					'Content-Type' :'application/json'
				},
				data : data
			}

			$http(req).then(function(response) {
				console.log(response.data);
				deferred.resolve(response.data);
			}, function() {
				deferred.reject(response.data);

			});
			return deferred.promise;
		}

	}
});

