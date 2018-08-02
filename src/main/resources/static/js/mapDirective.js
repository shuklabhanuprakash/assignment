myapp.directive('myMap',function($http, $q, dataFactory) {
					return {
						restrict : 'E',
						replace : true,

						template : '<div id="mapDiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
						link : function(scope, element, attrs) {
							scope.images = [];

							const configureMap = function(mapData, latlong) {
								// get min and max values
								var minBulletSize = 3;
								var maxBulletSize = 70;
								var min = Infinity;
								var max = -Infinity;
								for (var i = 0; i < mapData.length; i++) {
									var value = mapData[i].value;
									if (value < min) {
										min = value;
									}
									if (value > max) {
										max = value;
									}
								}

								// it's better to use circle square to show
								// difference between
								// values, not a radius
								var maxSquare = maxBulletSize * maxBulletSize
										* 2 * Math.PI;
								var minSquare = minBulletSize * minBulletSize
										* 2 * Math.PI;

								// create circle for each country
								scope.images = [];
								for (var i = 0; i < mapData.length; i++) {
									var dataItem = mapData[i];
									var value = dataItem.value;
									// calculate size of a bubble
									var square = (value - min) / (max - min)
											* (maxSquare - minSquare)
											+ minSquare;
									if (square < minSquare) {
										square = minSquare;
									}
									var size = Math
											.sqrt(square / (Math.PI * 2));
									var id = dataItem.code;

									scope.images.push({
										"type" : "circle",
										"theme" : "light",
										"width" : size,
										"height" : size,
										"color" : dataItem.color,
										"longitude" : latlong[id].longitude,
										"latitude" : latlong[id].latitude,
										"title" : dataItem.name,
										"value" : value
									});
								}
							}

							var initMap = function(mapData, latitudeData) {
								if (map)
									map.destroy();
								var config = scope.config || {};

								configureMap(mapData, latitudeData);

								// build map
								var map = AmCharts
										.makeChart(
												"mapDiv",
												{
													"type" : "map",
													"projection" : "eckert6",
													"titles" : [
															{
																"text" : "Population of the World in 2011",
																"size" : 14
															},
															{
																"text" : "source: Gapminder",
																"size" : 11
															} ],
													"areasSettings" : {
													// "unlistedAreasColor":
													// "#000000",
													// "unlistedAreasAlpha": 0.1
													},
													"imagesSettings" : {

														balloonText : '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>'
													},
													"dataProvider" : {
														"map" : "worldLow",
														"images" : scope.images
													},
													"export" : {
														"enabled" : true
													}
												});

							}

							const loadMapData = function() {
								var promise = dataFactory.data("GET",
										"json/map.json");

								promise.then(function success(mapData) {
									console.log(mapData);
									var promise = dataFactory.data("GET",
											"json/latitude.json");

									promise.then(
											function success(latitudeData) {
												console.log(latitudeData);

												initMap(mapData, latitudeData);
											}, function error() {
											});

								}, function error() {
								});

							}

							scope.init = function() {

								loadMapData();
							}

							scope.init();

						}
					};

				});