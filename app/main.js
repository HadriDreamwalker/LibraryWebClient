angular.module("Library", ["ngRoute"])

.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "templates/accueil.html"
	})
	.when('/authors', {
		templateUrl: "templates/authors.html",
		controller: "AuthorsController"
	})
	.when('/author/:id', {
		templateUrl: "templates/author.html",
		controller: "AuthorController"
	})
	.when('/publishers', {
		templateUrl: "templates/publishers.html",
		controller: "PublishersController"
	})
	.otherwise({
		redirectTo: '/'
	})
}])