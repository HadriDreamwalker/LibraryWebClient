angular.module("Library")
.controller('AuthorController', ['$scope', '$routeParams', '$http', "$location", "Api", function ($scope, $routeParams, $http, $location, Api) {
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
		Api.deleteAuthor(id)
			.success(function(){
				$location.path("/authors");
			})
	}

	$scope.modifyAuthor = function() {
		Api.putAuthor(id, $scope.authorNew)
			.success(function(author){
				$scope.author = author;
				$scope.modify = false;
			})
			.error(function(reason) {
				console.error(reason);
			})
	}

	Api.getAuthor(id)
		.success(function(author) {
			$scope.author = author;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])