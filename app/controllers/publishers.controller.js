angular.module("Library")
.controller('PublishersController', ['$scope', '$http', 'Api', function ($scope, $http, Api) {
	$scope.form = false;
	$scope.publishers = []
	$scope.publisher = {};
	
	Api.getPublishers()
		.success(function(publishers) {
			$scope.publishers = publishers;
		})
		.error(function(reason) {
			console.error(reason);
		})

	$scope.addPublisher = function () {
		Api.postPublisher($scope.publisher)
			.success(function(publisher) {
				$scope.publishers.push(publisher);
				$scope.publisher = {};
			})
			.error(function(reason) {
				console.error(reason);
			})
	};
}])