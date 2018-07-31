var app = angular.module('assignment', [ 'ui.router' ])

.config(function($stateProvider, $urlRouterProvider) {

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

})