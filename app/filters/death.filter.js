angular.module('Library')
.filter('death', function(){
	return function(value) {
		if(!value)
			return "Today";
		return value;
	}
})