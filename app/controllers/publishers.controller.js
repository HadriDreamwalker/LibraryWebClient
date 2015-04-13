angular.module("Library")
.controller('PublishersController', ['$scope', '$http', function($scope, $http) {
	$scope.form = false;
	$scope.publishers = []
	$scope.publisher = {};
	
	$http.get("http://192.168.2.10:8080/v1/publishers")
		.success(function(publishers) {
			$scope.publishers = publishers;
		})
		.error(function(reason) {
			console.error(reason);
		})

	$scope.addPublisher = function () {
		$http.post("http://192.168.2.10:8080/v1/publishers", $scope.publisher)
			.success(function(publisher) {
				$scope.publishers.push(publisher);
				$scope.publisher = {};
			})
			.error(function(reason) {
				console.error(reason);
			})
	};
}])