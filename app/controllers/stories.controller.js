angular.module("Library")
.controller("StoriesController", ["$scope", "$http", function ($scope, $http) {
	$scope.form = false;
	$scope.story = {};
	$scope.stories = {};
	$scope.showAuthorsList = false;
	$scope.authorsList = [];

	$scope.addStory = function() {
		$scope.story.authors = $scope.authorsList.filter(function (item) {
			return item.checked;
		}).map(function (item) {
			return item._id;
		});

		$http.post("http://192.168.2.10:8080/v1/stories/", $scope.story)
			.success(function (story) {
				$scope.stories.push(story);
			})
			.error(function (reason) {
				console.log(reason);
			})
	};

	$http.get("http://192.168.2.10:8080/v1/stories/")
		.success(function (stories) {
			$scope.stories = stories;
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