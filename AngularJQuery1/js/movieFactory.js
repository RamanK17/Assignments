app.factory("movieFactory",function($http,$q){
	return function(movieName,pageno){
		var deferred = $q.defer();
		$http.get("http://www.omdbapi.com/?s="+movieName+"&page="+pageno).then(function(response){
		deferred.resolve(response.data);
		});
	return (deferred.promise);
	};//end function
});//end movieFactory

//for one movie details
app.factory("myFactory", function($http,$q) {
	return function(param){
		var deferred = $q.defer();
		$http.get("http://www.omdbapi.com/?i="+param).then(function(response){
		deferred.resolve(response.data);
		});
	return (deferred.promise);
	};//end function
});//end myFactory