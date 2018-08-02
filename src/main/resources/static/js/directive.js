var myapp = angular.module('assignment');



myapp.directive('myElem',
   function ($http,$q) {
       return {
           restrict: 'E',
           replace:true,
          
           template: '<div id="chartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
               
        	   
        	   
        	   
                var chart = false;
               
                var initChart = function(data) {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("chartdiv", {
	            "type": "serial",
	            "theme": "none",
	            "marginLeft": 20,
	            "pathToImages": "http://www.amcharts.com/lib/3/images/",
	            "dataProvider":data,
	            "valueAxes": [{
	                "axisAlpha": 0,
	                "inside": true,
	                "position": "left",
	                "ignoreAxisWidth": true
	            }],
	            "graphs": [{
	                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
	                "bullet": "round",
	                "bulletSize": 6,
	                "lineColor": "#d1655d",
	                "lineThickness": 2,
	                "negativeLineColor": "#637bb6",
	                "type": "smoothedLine",
	                "valueField": "value"
	            }],
	            "chartScrollbar": {},
	            "chartCursor": {
	                "categoryBalloonDateFormat": "YYYY",
	                "cursorAlpha": 0,
	                "cursorPosition": "mouse"
	            },
	            "dataDateFormat": "YYYY",
	            "categoryField": "year",
	            "categoryAxis": {
	                "minPeriod": "YYYY",
	                "parseDates": true,
	                "minorGridAlpha": 0.1,
	                "minorGridEnabled": true
	            }
	        });
                    
                        
                };
              
                
                scope.init = function(){
                	
                	var promise = loadAmChartData();
                	
                	promise.then(function success(data){
                	console.log(data);
                		 initChart(data);
                	},function error(){})
                	 
                }
                
                
                const loadAmChartData = function(){
                    var defer = $q.defer();
                	$http.get("json/amChart.json").then(function(response) {
            			console.log(response.data)
            			return defer.resolve(response.data);
            		}, function(error) {
            			console.log("error", error);
            			defer.reject(response.data);
            		});
                	
                	return defer.promise;
                }
                scope.init();
         }//end watch           
       }
   }) ;







