(function(){
	angular.module("timbr",[
		"ui.router",
		"ngResource"
	])
	.config([
		"$stateProvider",
		"$locationProvider",
		routes
	])
	.controller(,[])
/*
*/
function routes(){
	$locationProvider.html5Mode(true);
	$stateProvider
	.state("home",
		url: "/",
		templateUrl: "js/ng-views/",
		controller: "",
		controllerAs: ""
	)
}


})()