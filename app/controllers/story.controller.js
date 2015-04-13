angular.module("Library")
.controller("StoryController", ["$scope", "$http", "$routeParams", "$location", function ($scope, $http, $routeParams, $location) {
	$scope.story = {};
	$scope.storyNew = {};
	var id = $routeParams.id;
	$scope.modify = false;
	$scope.delete = false;
	$scope.authorsList = [];

	$scope.preModifyStory = function() {
		$scope.modify = true;
		$scope.storyNew = angular.copy($scope.story);

		$http.get("http://192.168.2.10:8080/v1/authors")
			.success(function (authors) {
				$scope.authorsList = authors.map(function (item) {
					if($scope.authorsList.indexOf(item)) {
						item.checked = true;
						return item;
					}
				})
			})
			.error(function (reason) {
				console.error(reason);
			})
	}

	$scope.modifyStory = function() {
		$scope.storyNew.authors = $scope.authorsList.filter(function (item) {
			return item.checked;
		}).map(function (item) {
			return item._id;
		})

		$http.put("http://192.168.2.10:8080/v1/stories/" + id, $storyNew)
			.success(function (story) {
				$scope.story = story;
				$scope.modify = false;
			})
			.error(function (reason) {
				console.error(reason);
			})
	}

	$scope.preDeleteStory = function () {
		$scope.delete = true;
	}

	$scope.deleteStory = function () {
		$http.delete("http://192.168.2.10:8080/v1/stories/" + id)
			.success(function () {
				$location.path("/stories/");
			})
			.error(function (reason) {
				console.error(reason);
			})
	}

	$http.get("http://192.168.2.10:8080/v1/stories/" + id + "?embed=authors")
		.success(function (story) {
			$scope.story = story;
		})
		.error(function (reason) {
			console.error(reason);
		})

	$http.get("http://192.168.2.10:8080/v1/authors/")
		.success(function (authors) {
			$scope.authorsList = authors;
		})
		.error(function (reason) {
			console.error(reason);
		})

}])