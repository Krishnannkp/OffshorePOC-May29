/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/modules/angular-mocks/index.d.ts" />
/// <reference path="./weatherservice.ts" />
/// <reference path="../model/WeatherInfoModel.ts" />

describe( 'weatherService', () => {

    let $http: ng.IHttpService;
		let $q: ng.IQService;  
    let createService: Function;
     let wservice: App.WeatherService; 
     
     let lweatherservice:any;

    //beforeEach( angular.mock.module( 'App' ) );
   

    beforeEach(() => {
        inject( function (
            _$http_: ng.IHttpService,
            _$q_: ng.IQService
        ) {
            $http = _$http_;
            $q = _$q_;
           
            wservice = undefined;
            createService = () => {
                wservice = new App.WeatherService($http,$q);
            };
        });

    });

    describe('Weather service', function() {
  it('api call check', function() {
   createService();
   lweatherservice = wservice.getWeatherInfo('chennai');
   expect(lweatherservice).toEqual($q.defer().promise);
  });
});
 });