angular.module("Library")
.controller('PublishersController', ['$scope', '$http', function($scope, $http) {
	$scope.form = false;
	$scope.publishers = []
	
	
	$http.get("http://192.168.2.10:8080/v1/publishers")
		.success(function(publishers) {
			$scope.publishers = publishers;
		})
		.error(function(reason) {
			console.error(reason);
		})

	$scope.addPublisher = function() {

	}
}])