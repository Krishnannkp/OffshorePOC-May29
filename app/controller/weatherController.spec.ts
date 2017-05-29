/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/modules/angular-mocks/index.d.ts" />
/// <reference path="../services/weatherservice.ts" />
/// <reference path="../model/WeatherInfoModel.ts" />
/// <reference path="../controller/weatherController.ts" />

describe('weather Controller', () => {

    let $q: angular.IQService;
    let $http: ng.IHttpService;
    let WeatherService: App.WeatherService;
    let $controller: angular.IControllerService;
    let $httpBackend: angular.IHttpBackendService;
    let weatherctrl: App.weatherController;
    let createController: Function;
    let lCurrCode:string;
    let lResult: any;
    let WI: App.WeatherInfo = <App.WeatherInfo>{};
    
    beforeEach( () => {
        
        inject( function (
            _$http_: angular.IHttpService,
            _$q_: angular.IQService,
            _$httpBackend_: angular.IHttpBackendService,
        ) {
            $http = _$http_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;
            WeatherService = undefined;
            weatherctrl = undefined;
            createController = () => {
                WeatherService = new App.WeatherService($http,$q);
                weatherctrl = new App.weatherController(WeatherService);
            };
        });
    });

    describe( 'Call the API', () => {
        it( 'Should return a value', () => {
          createController();  
          WI.astronomy = weatherctrl.getWeatherInfo('chennai').astronomy;
          expect(WI.astronomy.sunrise!=null).toBeTruthy();
        });
    });
    
});


/*/// <reference path="./weatherController.ts" />
/// <reference path="../model/WeatherInfoModel.ts" />

describe( 'weatherController', () => {

    let createController: Function;
    let $http: ng.IHttpService;
	let $q: ng.IQService; 
    let $controller: angular.IControllerService;
    let weatherController: App.weatherController;
     
     let lweatherservice:App.WeatherService;

    beforeEach( angular.mock.module( 'angularWithTS' ) );  
let $inject =  ["weatherController"];
    beforeEach(() => {
        inject( function ( 
            _weatherController:App.weatherController
        ) {  
             weatherController = _weatherController;
            weatherController.getWeatherInfo('chennai');
           // createController = () => {
            //    weatherController =new App.weatherController(lweatherservice) ;
                //$controller<App.weatherController>( 'weatherController', {
                   // 'weatherService': lweatherservice
                 //   });
            //};
        });

    });

    describe('Controller', function() {
  it('api call check', function() {

   //createController();
   expect(1).toEqual(1);
  });

});

});*/


/*/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/modules/angular-mocks/index.d.ts" />
/// <reference path="../services/weatherservice.ts" />
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
    // An intentionally failing test. No code within expect() will never equal 4.
   createService();
   lweatherservice = wservice.getWeatherInfo('chennai');
   expect(lweatherservice).toEqual($q.defer().promise);
  });
});
 });

*/