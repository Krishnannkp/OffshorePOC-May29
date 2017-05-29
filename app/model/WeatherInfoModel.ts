module App {
  
     export class Astronomy {          
        sunrise:string;
        sunset:string;
    }
    export class Atmosphere {        
        humidity:string;
        pressure:string;
        rising:string;
        visibility:string;        
    }
     export class ForeCast {        
        date:string;
        day:string;
        high:string;
        low:string;
        text:string;
    }
     export class Location {        
        city:string;
        country:string;
        region:string;          
    }
     export class WeatherInfo {        
        astronomy:Astronomy;
        forecast:ForeCast[]; 
        atmosphere:Atmosphere;  
        location:Location;        
    }
}
