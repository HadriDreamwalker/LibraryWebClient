angular.module("Library")
.controller("SeriesController", ["$scope", "$http", function($scope, $http) {
	$scope.form = false;
	$scope.series = null;

	

	$http.get("http://192.168.2.10:8080/v1/series")
		.success(function(series) {
			$scope.series = series;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])