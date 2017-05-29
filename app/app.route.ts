/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/angular-ui-router/index.d.ts" />
module App {

	angular.module(appName)
		.config([
		"$stateProvider",
		"$urlRouterProvider",
		(
			$stateProvider: angular.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider) => {
			'use strict';

			$stateProvider.state("home", {
				url: "/",
				templateUrl: "views/WeatherInformation.html",
				controller: "weatherController",
				controllerAs: "ctrWeather",
			});

			$urlRouterProvider.otherwise("/");

		}]);

}