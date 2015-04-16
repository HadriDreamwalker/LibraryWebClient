angular.module("Library")
.controller('AuthorsController', ['$scope', "$http", "Api", function ($scope, $http, Api){
	$scope.form = false;
	$scope.authors = [];
	$scope.showForm = function(){
		$scope.form = !$scope.form;
	};

	$scope.author = {};

	$scope.addAuthor = function() {
		Api.postAuthor($scope.author)
			.success(function(author) {
				$scope.authors.push(author);
				$scope.author = {};
			})
			.error(function(reason) {
				console.error(reason);
			})
	};

	Api.getAuthors()
		.success(function(authors){
			$scope.authors = authors;
		})
		.error(function(reason) {
			console.error(reason);
		})
}])