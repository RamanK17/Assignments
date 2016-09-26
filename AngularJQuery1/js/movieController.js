app.controller('myCtrl', function($scope,movieFactory) {
	$scope.pageno=1;
	$scope.total_count=0;
	$scope.itemsPerPage=10;
	$scope.getData=function(pageno)
	{	
		var promise=movieFactory($scope.movieName,pageno);
		promise.then(function(details){
			$scope.myMovie = details.Search;
			$scope.total_count=details.totalResults;
		});//end promise
	}	
	$scope.getData($scope.pageno);
});//end myCtrl		
app.controller('movieCtrl',function($stateParams,myFactory,$scope)
{
	var promise=myFactory($stateParams.param);
	promise.then(function(data)
	{
		$scope.myDetails=data;
	});//end promise
});//end movieCtrl