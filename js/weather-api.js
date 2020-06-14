class weatherAPI {
  constructor() {
    this.url = "api.openweathermap.org";
    this.api_key = "650b3a42c95087be0795daf4b1c5b08b";
    // this.city = 'abuja';
    this.icon_url = "http://openweathermap.org/img/w/";
  }

  async getWeather(city) {
    const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=650b3a42c95087be0795daf4b1c5b08b`;
    const weatherReport = await fetch(query);
    const weather = await weatherReport.json();
   
    const data = new Map();
    data.set("cod", weather.cod);
    if (weather.cod !== "404") {
      data.set("country", weather.sys.country);
      data.set("city", weather.name);
      data.set("feels_like", weather.main.feels_like);
      data.set("temp", weather.main.temp);
      data.set("humidity", weather.main.humidity);
      data.set("pressure", weather.main.pressure);
      data.set("wind_deg", weather.wind.deg);
      data.set("wind_speed", weather.wind.speed);
      data.set("description", weather.weather[0].description);
      const icon = weather.weather[0].icon;
      data.set("icon_url", `${this.icon_url}${icon}.png`);
    }
    return data;
  }
}
