class UI {
  constructor() {
    this.weather = document.querySelector(".weather");
  }
  handlePopup(e) {
    const popup = document.querySelector(".popup");   
    const container = document.querySelector(".container");
    popup.classList.toggle("active");
    container.classList.toggle("active");
  }
//   clearForm() {
//     const city = document.querySelector("#txtCity");
//     city.value = "";
//   }
  showCity(city) {
    this.weather.innerHTML = `
        <h1 class="city">${city.get("city")}, ${city.get("country")}</h1>
      <h3 class="condition">${city.get("description")}</h3>
      <h4 class="temp">${city.get("temp")} (F)</h4>
      <img src="${city.get("icon_url")}" alt="" class="icon">
      <div class="stats">
         <li>Relative Humidity: ${city.get("humidity")}%</li>
         <li> Pressure: ${city.get("pressure")} bars</li>
         <li> Feels Like: ${city.get("feels_like")} (F)</li>
         <li> Wind speed : ${city.get("wind_speed")} km/hr at ${city.get(
      "wind_deg"
    )} deg</li>
      </div>
      <div>
         <button class="btn btn-popup">Change Location</button>
      </div>   
      `;
    ui.setPopup();
   }
   
   showMessage(message, msgType) {
      const div = document.createElement('div');
      const parent = document.querySelector('.container');
      const before = document.querySelector('.weather');
      div.className = msgType;
      div.appendChild(document.createTextNode(message));
      parent.insertBefore(div, before);
      setTimeout(() => {
         ui.clearMessage();
      }, 2000);

   }
  setPopup() {
    // activate popup
    const btnPopup = document.querySelectorAll(".btn");

    // show popup

    btnPopup.forEach((btn) => {
      btn.addEventListener("click", ui.handlePopup);
    });    
   }
   clearMessage() {
      const msg = document.querySelector('.alert');      
      if (msg) {
         msg.remove();    
         ls.setCity('Abuja');
         
      }

   }
}
