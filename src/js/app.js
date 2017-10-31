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
	.controller("Landingtrlr",[
			"$state",
			"$stateParams",
			"LandCtrlrFun"
		])
	.controller("HomeCtrlr",[
			"$state",
			"$stateParams",
			"HomeCtrlrFun"	
		])
	.factory("Store", [
	  "$resource",
	  StoreFactory
	])
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
	.state("landing",
		url: "/",
		templateUrl: "js/ng-views/landing",
		controller: "Landingtrlr",
		controllerAs: "vm"
	)
	.state("home",
		url: "/home",
		templateUrl: "js/ng-views/home",
		controller: "HomeCtrlr",
		controllerAs: "HomeVM"
	)
}
function StoreFactory($resource){

}
function LandCtrlrFun($state,$stateParams){

}
function HomeCtrlrFun($state,$stateParams){

}
})()