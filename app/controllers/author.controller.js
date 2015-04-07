angular.module("Library")
.controller('AuthorController', ['$scope', '$routeParams', '$http', "$location", function($scope, $routeParams, $http, $location) {
	$scope.author = null;
	var id = $routeParams.id;

	$scope.delete = false;
	$scope.modify = false;

	$scope.preModifyAuthor = function(){
		$scope.modify = !$scope.modify;
		$scope.authorNew = null;
		$scope.authorNew = angular.copy($scope.author);
	}
	
	$scope.deleteAuthor = function(){
		$http.delete("http://192.168.2.10:8080/v1/authors/" + id)
			.success(function(){
				$location.path("/authors");
			})
	}

	$scope.modifyAuthor = function() {
		$http.put("http://192.168.2.10:8080/v1/authors/" + id, $scope.authorNew)
			.success(function(author){
				$scope.author = author;
				$scope.modify = false;
			})
			.error(function(reason) {
				console.error(reason);
			})
	}

	$http.get("http://192.168.2.10:8080/v1/authors/" + id)
		.success(function(author) {
			$scope.author = author;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])