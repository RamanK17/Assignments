app.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/")
	$stateProvider
	.state("home",
	{
		url: '/home',
		templateUrl:"home.html"
	})
	.state("/searchDetails/:movie", {
		url:'/searchDetails/:movie',
		templateUrl : "table.html",
		controller: 'myCtrl'
	})
	.state("/movieDetails/:param", {
		url:"/movieDetails/:param",
		templateUrl : "movie.html",
		controller : "movieCtrl"
	});
 });