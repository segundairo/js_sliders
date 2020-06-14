const ui = new UI();
const wAPI = new weatherAPI();
const ls = new LS();
 const newCity = document.getElementById("txtCity");
// load default city or saved city
document.addEventListener("DOMContentLoaded", () => {
   ls.getCity();     
   init(wAPI.city);
});

document.getElementById("set_city").addEventListener("submit", () => {
   if (newCity.value.trim() !== "") {        
      ls.setCity(newCity.value);
     
  }
});

const init = (city) => {
  wAPI
    .getWeather(city)
    .then((data) => {
      if (data.get("cod") !== "404") {
        ui.showCity(data);
      } else {
        // show default city weather
         console.log('notfound', wAPI.city);
         ui.showMessage("Check city name, record not found", 'alert danger');
         ls.setCity(wAPI.city);
         wAPI.city = 'Abuja';
      }
    })
     .catch((err) => {
        console.log(err.message);
        ls.getCity();    
    });
};
