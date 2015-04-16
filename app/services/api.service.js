angular.module("Library")
.service('Api', ["$http", function ($http) {

	var funcs = {};
	var urlApi = "http://192.168.2.10:8080/v1/";

	/* Authors */

	funcs.getAuthors = function () {
		return $http.get(urlApi + "authors/");
	}

	funcs.getAuthor = function (id) {
		return $http.get(urlApi + "authors/" + id);
	}

	funcs.postAuthor = function (item) {
		return $http.post(urlApi + "authors/", item);
	}

	funcs.putAuthor = function (id, item) {
		return $http.put(urlApi + "authors/" + id, item);
	}

	funcs.deleteAuthor = function (id) {
		return $http.delete(urlApi + "authors/");
	}

	/* Publishers */

	funcs.getPublishers = function () {
		return $http.get(urlApi + "publishers/");
	}

	funcs.getPublisher = function (id) {
		return $http.get(urlApi + "publishers/" + id);
	}

	funcs.postPublisher = function (item) {
		return $http.post(urlApi + "publishers/", item);
	}

	funcs.putPublisher = function (id, item) {
		return $http.put(urlApi + "publishers/" + id, item);
	}

	funcs.deletePublisher = function (id) {
		return $http.delete(urlApi + "publishers/" + id);
	}

	/* Collections */

	funcs.getCollections = function () {
		return $http.get(urlApi + "collections/");
	}

	funcs.getCollection = function (id) {
		return $http.get(urlApi + "collections/" + id);
	}

	funcs.postCollection = function (item) {
		return $http.post(urlApi + "collections/", item);
	}

	funcs.putCollection = function (id, item) {
		return $http.put(urlApi + "collections/" + id, item);
	}

	funcs.deleteCollection = function (id) {
		return $http.delete(urlApi + "collections/" + id);
	}

	/* Series */

	funcs.getSeries = function () {
		return $http.get(urlApi + "series/");
	}

	funcs.getSerie = function (id) {
		return $http.get(urlApi + "series/" + id);
	}

	funcs.postSerie = function (item) {
		return $http.post(urlApi + "series/", item);
	}

	funcs.putSerie = function (id, item) {
		return $http.put(urlApi + "series/" + id, item);
	}

	funcs.deleteSerie = function (id) {
		return $http.delete(urlApi + "series/" + id);
	}

	/* Stories */

	funcs.getStories = function () {
		return $http.get(urlApi + "stories/");
	}

	funcs.getStory = function (id) {
		return $http.get(urlApi + "stories/" + id);
	}

	funcs.postStory = function (item) {
		return $http.post(urlApi + "stories/", item);
	}

	funcs.putStory = function (id, item) {
		return $http.put(urlApi + "stories/" + id, item);
	}

	funcs.deleterStory = function (id) {
		return $http.delete(urlApi + "stories/" + id);
	}

	/* Books */

	funcs.getBooks = function () {
		return $http.get(urlApi + "books/");
	}

	funcs.getBook = function (id) {
		return $http.get(urlApi + "books/" + id);
	}

	funcs.postBook = function (item) {
		return $http.post(urlApi + "books/", item);
	}

	funcs.putBook = function (id, item) {
		return $http.put(urlApi + "books/" + id, item);
	}

	funcs.deleteBook = function (id) {
		return $http.delete(urlApi + "books/" + id);
	}

	return funcs;
}]);