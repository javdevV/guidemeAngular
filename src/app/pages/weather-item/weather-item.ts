export class WeatherItem {
    // Test bel API loulani ama mech fiable barcha ...http://api.openweathermap.org // constructor(public name: String, public condition: String, public temperature: Number, public humidity: String,   public sunset: String){}

  // https://www.wunderground.com Hedha béhi //constructor(public latitude:String,public longitude:String, public temperature: Number){}

constructor(public summery:string, public timezone: string, public temperature:string, public humidity:string, public windSpeed:string,public sum:string){}
}