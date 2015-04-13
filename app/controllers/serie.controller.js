angular.module("Library")
.controller("SerieController", ["$scope", "$routeParams", "$http", "$location", function ($scope, $routeParams, $http, $location) {
	$scope.serie = {};
	var id = $routeParams.id;
	$scope.modify = false,
	$scope.delete = false;

	$http.get("http://192.168.2.10:8080/v1/series/" + id)
		.success(function (serie) {
			$scope.serie = serie;
		})
		.error(function (reason) {
			console.error(reason);
		})

	$scope.preModifySerie = function () {
		$scope.modify = true;
		$scope.serieNew = angular.copy($scope.serie);
	}

	$scope.modifySerie = function() {
		$http.put("http://192.168.2.10:8080/v1/series/" + id, $scope.serieNew)
			.success(function (serie) {
				$scope.serie = serie;
				$scope.modify = false;
			})
			.error(function (reason) {
				console.error(reason);
			})
	}

	$scope.preDeleteSerie = function() {
		$scope.delete = true;
	}

	$scope.deleteSerie = function() {
		$http.delete("http://192.168.2.10:8080/v1/series/" + id)
			.success(function() {
				$location.path("/series");
			})
			.error(function (reason) {
				console.log(reason);
			})
	}
}])