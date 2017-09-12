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
	.controller("",[])
	// .factory("Contest", [
	//   "$resource",
	//   ContestFactory
	// ])
	// .controller("IndexController", [
	//   "$state",
	//   "$stateParams",
	//   "Contest",
	//    IndexControllerFunction
	// ])

	
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