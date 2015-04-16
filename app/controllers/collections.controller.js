angular.module("Library")
.controller("CollectionsController", ["$scope", "$http", "Api", function($scope, $http, Api) {
	$scope.form = false;
	$scope.collection = null;
	$scope.collections = null;
	$scope.showPublishersList = false;
	$scope.publishersList = [];

	$scope.addCollection = function() {
		$scope.collection.publishers = $scope.publishersList.filter(function(item) {
			return item.checked;
		}).map(function(item) {
			return item._id;
		});

		Api.postCollection($scope.collection)
			.success(function(collection){
				$scope.collections.push(collection);
			})
			.error(function(reason){
				console.error(reason);
			})
	};

	$scope.checkList = function() {
		var i;
		var finalList = [];
		console.log("Je suis avant la boucle");
		for(i = 0; i < $scope.publishersList.length; i++) {
			console.log("Je suis dans la boucle");
			if($scope.publishersList[i].checked === true){
				finalList.push($scope.publishersList[i]._id);
			}
		}
		console.log(finalList);
		return finalList;
	}

	Api.getCollections()
		.success(function(collections){
			$scope.collections = collections;
		})
		.error(function(reason){
			console.error(reason);
		});

	Api.getPublishers()
			.success(function(publishers){
				$scope.publishersList = publishers;
			})
			.error(function(reason) {
				console.error(reason);
			});
}])