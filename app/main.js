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
	.when('/publisher/:id', {
		templateUrl: "templates/publisher.html",
		controller: "PublisherController"
	})
	.when('/collections', {
		templateUrl: "templates/collections.html",
		controller: "CollectionsController"
	})
	.when('/collection/:id', {
		templateUrl: "templates/collection.html",
		controller: "CollectionController"
	})
	.when('/series', {
		templateUrl: "templates/series.html",
		controller: "SeriesController"
	})
	.when('/serie/:id', {
		templateUrl: "templates/serie.html",
		controller: "SerieController"
	})
	.when('/stories', {
		templateUrl: "templates/stories.html",
		controller: "StoriesController"
	})
	.when('/story/:id', {
		templateUrl: "templates/story.html",
		controller: "StoryController"
	})
	.otherwise({
		redirectTo: '/'
	})
}])