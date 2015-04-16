angular.module("Library")
.controller("SerieController", ["$scope", "$routeParams", "$http", "$location", "Api", function ($scope, $routeParams, $http, $location, Api) {
	$scope.serie = {};
	var id = $routeParams.id;
	$scope.modify = false,
	$scope.delete = false;

	Api.getSerie(id)
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
		Api.putSerie(id, $scope.serieNew)
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
		Api.deleteSerie(id)
			.success(function() {
				$location.path("/series");
			})
			.error(function (reason) {
				console.log(reason);
			})
	}
}])