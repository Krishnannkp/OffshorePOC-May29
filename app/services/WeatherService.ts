
/// <reference path="../../typings/modules/angular-mocks/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
module App {
	'use strict';	

	export class WeatherService  {

        static $inject = ["$http","$q"];
        constructor(private $http: ng.IHttpService,
					private $q: ng.IQService)
		{
        }			
	
       getWeatherInfo(searchLocation): ng.IPromise<{}> {
		var deferred = this.$q.defer();
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+searchLocation+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        this.$http.get(url).then(
            function(response) {
                deferred.resolve(response.data);
            },
            function(errors) {               
                deferred.reject(errors.data);
            }
        );

        return deferred.promise;
		};	  	
	}
	angular.module(appName).service("WeatherService", WeatherService);
}