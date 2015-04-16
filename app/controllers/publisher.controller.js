angular.module("Library")
.controller("PublisherController", ["$scope", "$routeParams", "$http", "$location", "Api", function($scope, $routeParams, $http, $location, Api) {
	$scope.publisher = null;
	var id = $routeParams.id;

	$scope.modify = false;
	$scope.delete = false;

	$scope.preModifyPublisher = function() {
		$scope.modify = true;
		$scope.publisherNew = null;
		$scope.publisherNew = angular.copy($scope.publisher);
	}

	$scope.modifyPublisher = function() {
		Api.putPublisher(id, $scope.publisherNew)
			.success(function(publisher) {
				$scope.publisher = publisher;
				$scope.modify = false;
			})
			.error(function(reason){
				console.error(reason);
			})
	}

	$scope.preDeletePublisher = function() {
		$scope.delete = true;
	}

	$scope.deletePublisher = function() {
		Api.deletePublisher(id)
			.success(function() {
				$location.path("/publishers");
			})
			.error(function(reason) {
				console.error(reason);
			})
	}

	Api.getPublisher(id)
		.success(function(publisher) {
			$scope.publisher = publisher;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])