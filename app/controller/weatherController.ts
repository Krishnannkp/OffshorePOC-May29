module App {
	'use strict';

	export class weatherController {

		public WI: WeatherInfo = <WeatherInfo>{};
        public returnMessage: string;
        static $inject = ["WeatherService"];
        constructor(private weatherService: WeatherService) {
            this.weatherService = weatherService;
        }

        public getWeatherInfo = (searchLocation: string) => { 
            if(searchLocation.length == 0)  
            {
                  this.returnMessage = 'failure';
                   return;   
            }  
              
        this.weatherService.getWeatherInfo(searchLocation).then((data: any)=>
        {     
            if(data.query.results!=null)
            {
           this.WI.astronomy  = data.query.results.channel.astronomy;
           this.WI.atmosphere = data.query.results.channel.atmosphere;
           this.WI.forecast   = data.query.results.channel.item.forecast;
           this.WI.location   = data.query.results.channel.location; 
            }
 
       });
       this.returnMessage = 'success';       
     }          
	}
	angular.module(appName).controller("weatherController", weatherController);
}