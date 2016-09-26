angular.module('myApp')
.factory("employeeFactory",function($http,$q){
	return function(pageno){
		pageno=pageno-1;
		// console.log("in factory"+pageno);
		var deferred = $q.defer();
		// $http.get("http://localhost:3000/data?_start=0&_end=10")
		$http.get("http://localhost:3000/data/?_start="+(pageno*10)+"&_end="+((pageno*10)+10))
		.then(function(response){
			var total_count=response.headers('X-Total-count');
			response["total_count"]=total_count;
		deferred.resolve(response);
		});
	return (deferred.promise);
	};//end function
});//end employeeFactory

//for one employee details search
angular.module('myApp')
.factory("myFactory", function($http,$q) {
	return function(empid){
		var deferred = $q.defer();
		$http.get("http://localhost:3000/data/?id="+empid).then(function(response){
		deferred.resolve(response.data);	
		});
	return (deferred.promise);
	};
});//end myFactory

//for one employee added
angular.module('myApp')
.factory("addFactory", function($http,$q) {
	//alert("im in add factory");
	return function(adder){
		//console.log(adder);
		var deferred = $q.defer();
		$http.post("http://localhost:3000/data",adder).then(function(response){
		deferred.resolve(response.data);	
		});
	return (deferred.promise);
	};
});