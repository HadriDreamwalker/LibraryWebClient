angular.module("Library")
.filter("finished", function() {
	return function (value) {
		if(value === true)
			return "Finished";
		return "Not over yer";
	};
})