angular.module("Library")
.controller("SeriesController", ["$scope", "$http", function($scope, $http) {
	$scope.form = false;
	$scope.series = null;

	Api.getSeries()
		.success(function(series) {
			$scope.series = series;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])