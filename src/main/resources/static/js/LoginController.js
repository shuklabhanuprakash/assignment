
app.controller('LoginController',
  function($rootScope, $scope, $http, $location,$state) {
 
	$rootScope.userAuthenticated  = false;
	 var authenticate = function(credentials, callback) {
	        var headers = credentials ? {authorization : "Basic " + btoa(credentials.username + ":" + credentials.password) } : {};
	        console.log("authenticating " + credentials.username)

	        $http.get('/authenticate', {headers : headers})
	        .then(function success(response) {
	            if (response.data.name) {
	            	 window.localStorage.liveStatUserId = response.data.name;
	            	 $rootScope.userAuthenticated  =true;
	            	callback && callback();
	            } else {
	               
	                callback && callback();
	            }
	        }, function error(error)  {
	           
	            callback && callback();
	        });
	    };

	    $scope.credentials = {};
	    
	    $scope.login = function() {
	        console.log("logging in");
	        authenticate($scope.credentials, function() {
	            if (window.localStorage.liveStatUserId) {
	                $state.go("home")
	            } else {
	                console.log("Forcing login from LoginController after login, since we didn't get a userid.")
	                $location.path("/login");
	                $scope.error = true;
	            }
	        });
	    };

	    $scope.logout=function(){
			$location.search("views", null);
			$rootScope.userAuthenticated  = false;
			  $state.go("login");

		};
	
  });
