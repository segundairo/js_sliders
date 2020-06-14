class LS {
  getCity() {
    let city = "";
    if (localStorage.getItem("city")) {
      city = JSON.parse(localStorage.getItem("city"));
      wAPI.city = city;
    } else {
      localStorage.setItem("city", JSON.stringify('abuja'));
    }
  }
  setCity(city) {
    if (city !== "notfound" || city!== 'undefined') {
      localStorage.setItem("city", JSON.stringify(city)); 
    }
     
  }
}
