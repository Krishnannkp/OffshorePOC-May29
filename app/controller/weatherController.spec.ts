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
    let WI: App.WeatherInfo = <App.WeatherInfo>{};

    beforeEach(() => {
        inject(function (
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
                WeatherService = new App.WeatherService($http, $q);
                weatherctrl = new App.weatherController(WeatherService);
            };
        });
    });

    describe('Call the API', () => {

        beforeEach(() => {
            createController();
        });

        it('Should return a value', () => {
            weatherctrl.getWeatherInfo('chennai');
            expect(weatherctrl.returnMessage).toEqual('success');
        });
        
        it('Should show error for empty location', () => {
            weatherctrl.getWeatherInfo('');
            expect(weatherctrl.returnMessage).toEqual('failure');
        });
    });

});