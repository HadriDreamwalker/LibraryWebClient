angular.module('Library')
.controller("CollectionController", ["$scope", "$routeParams", "$http", "$location", "Api", function ($scope, $routeParams, $http, $location, Api) {
	$scope.collection = null;
	var id = $routeParams.id;
	$scope.modify = false;
	$scope.delete = false;
	$scope.publishersList = [];

	$scope.preModifyCollection = function() {
		$scope.modify = true;
		$scope.collectionNew = angular.copy($scope.collection);

		Api.getPublishers()
		.success(function(publishers) {
			$scope.publishersList = publishers;
			for(var i = 0; i < $scope.publishersList.length; i++) {
				for(var y = 0; y < $scope.collection.publishers.length; y++) {
					if($scope.collection.publishers[y]._id === $scope.publishersList[i]._id) {
						$scope.publishersList[i].checked = true;
					}
				}
			}
		})
		.error(function(reason) {
			console.error(reason);
		})
	}

	$scope.modifyCollection = function() {
		$scope.collectionNew.publishers = $scope.publishersList.filter(function(item) {
			return item.checked;
		}).map(function(item) {
			return item._id;
		});

		Api.putCollection(id, $scope.collectionNew)
			.success(function(collection){
				$scope.modify = false;
				$scope.collection = collection;
			})
			.error(function(reason){
				console.error(reason);
			})
	}

	$scope.preDeleteCollection = function() {
		$scope.delete = true;
	}

	$scope.deleteCollection = function() {
		Api.deleteCollection(id)
			.success(function() {
				$location.path("/collections");
			})
			.error(function(reason) {
				console.error(reason);
			})
	}

	Api.getCollection(id)
		.success(function(collection) {
			$scope.collection = collection;
			console.log(collection.publishers[0].name);
		})
		.error(function(reason) {
			console.error(reason);
		})

}])