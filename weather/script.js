fetch("https://api.weatherapi.com/v1/forecast.json?key=90d5fa8a7d2041ccb7d182927230202&q=38.729607,-77.750267&days=1&aqi=no&alerts=no")

.then(res => res.json())

.then(obj => {

console.log(obj.current.temp_f)
  document.getElementById("temp_f").innerHTML = obj.current.temp_f;

  console.log(obj.current.cloud)
  document.getElementById("cloud").innerHTML = obj.current.cloud;

  console.log(obj.current.wind_mph)
  document.getElementById("wind").innerHTML = obj.current.wind_mph;

   console.log(obj.current.humidity)
  document.getElementById("humidity").innerHTML = obj.current.humidity;




  
  

});navigator.geolocation.getCurrentPosition(function(whereIAm){

console.log(whereIAm.coords);



});


//get element by id, get the object