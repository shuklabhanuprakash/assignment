var app = angular.module('assignment', [  'ui.bootstrap', 'ui.router' ,
		'ng-fusioncharts','smart-table' ]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
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
	}), $stateProvider.state('home.info', {
		url : '/list',
		templateUrl : '/html/list.html'
	})

});


	

app.config(function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }   
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

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

