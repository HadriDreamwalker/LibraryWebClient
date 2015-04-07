angular.module("Library")
.controller('AuthorsController', ['$scope', "$http", function($scope, $http){
	$scope.form = false;
	$scope.authors = [];
	$scope.showForm = function(){
		$scope.form = !$scope.form;
	};

	$scope.author = {};

	$scope.addAuthor = function() {
		$http.post("http://192.168.2.10:8080/v1/authors", $scope.author)
			.success(function(author) {
				$scope.authors.push(author);
				$scope.author = {};
			})
			.error(function(reason) {
				console.error(reason);
			})
	};

	$http.get("http://192.168.2.10:8080/v1/authors")
		.success(function(authors){
			$scope.authors = authors;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])