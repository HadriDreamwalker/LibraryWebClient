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

		Api.postStory($scope.Story)
			.success(function (story) {
				$scope.stories.push(story);
			})
			.error(function (reason) {
				console.log(reason);
			})
	};

	Api.getStorie()
		.success(function (stories) {
			$scope.stories = stories;
		})
		.error(function (reason) {
			console.error(reason);
		})

	Api.getAuthors()
		.success(function (authors) {
			$scope.authorsList = authors;
		})
		.error(function (reason) {
			console.error(reason);
		})
}])