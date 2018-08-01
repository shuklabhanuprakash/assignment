var app = angular.module('assignment');
app.controller('DashboardController',function($scope,$element){
	
	$scope.init = function(){
		
		 
	} 
	
	
	
	console.log("in dashboard")
	 $scope.myDataSource = {
             chart: {
                 caption: "Harry's SuperMart",
                 subCaption: "Top 5 stores in last month by revenue",
             },
             data:[{
                 label: "Bakersfield Central",
                 value: "880000"
             },
             {
                 label: "Garden Groove harbour",
                 value: "730000"
             },
             {
                 label: "Los Angeles Topanga",
                 value: "590000"
             },
             {
                 label: "Compton-Rancho Dom",
                 value: "520000"
             },
             {
                 label: "Daly City Serramonte",
                 value: "330000"
             }]
           };
	 
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
		    data: [
		        {
		            label: "Teenage",
		            value: "1250400"
		        },
		        {
		            label: "Adult",
		            value: "1463300"
		        },
		        {
		            label: "Mid-age",
		            value: "1050700"
		        },
		        {
		            label: "Senior",
		            value: "491000"
		        }
		    ]
		}
	
	
	
});