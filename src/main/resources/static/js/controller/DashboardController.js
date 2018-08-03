var app = angular.module('assignment');
app.controller('DashboardController',function($scope,$element,dataFactory){
	$scope.myDataSource={};
	$scope.myDataSource2={};
	const loadSuperMarketData = function(){
		
		var promise = dataFactory.data("GET", "json/superMarket.json");

    	promise.then(function success(data){
    	console.log(data);
    	$scope.myDataSource = {
	             chart: {
	                 caption: "Harry's SuperMart",
	                 subCaption: "Top 5 stores in last month by revenue",
	             },
	             data:data
	           };
    	},function error(){})
    	 
		
		 
	}
	
const loadVisitor = function(){
		
		var promise = dataFactory.data("GET", "json/visitor.json");

    	promise.then(function success(data){
    	console.log(data);
    	$scope.myDataSource2 = {
    		    chart: {
    		        caption: "Age profile of website visitors",
    		        subcaption: "Last Year",
    		        startingangle: "120",
    		        showlabels: "0",
    		        showlegend: "1",
    		        enablemultislicing: "0",
    		        slicingdistance: "15",
    		        showpercentvalues: "1",
    		        showpercentintooltip: "0",
    		        plottooltext: "Age group : $label Total visit : $datavalue",
    		        theme: "fint"
    		    },
    		    data:data
    		}
    	},function error(){})
    	 
		
		 
	}
	
	$scope.init = function(){
		loadSuperMarketData();
		loadVisitor();
	} 
	
	
	
	
	
	 
	
	
	
	
});