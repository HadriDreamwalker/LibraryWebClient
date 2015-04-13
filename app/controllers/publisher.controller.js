angular.module("Library")
.controller("PublisherController", ["$scope", "$routeParams", "$http", "$location", function($scope, $routeParams, $http, $location) {
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
		$http.put("http://192.168.2.10:8080/v1/publishers/" + id, $scope.publisherNew)
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
		$http.delete("http://192.168.2.10:8080/v1/publishers/" + id)
			.success(function() {
				$location.path("/publishers");
			})
			.error(function(reason) {
				console.error(reason);
			})
	}

	$http.get("http://192.168.2.10:8080/v1/publishers/" + id)
		.success(function(publisher) {
			$scope.publisher = publisher;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])