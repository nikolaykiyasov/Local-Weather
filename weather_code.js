var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempLogo = 'C';
var value = 0;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
     
      if (result.main.temp > 0)
        $("#temp").text("+" + result.main.temp);
  else $("#temp").text("-" + result.main.temp);
      
      $("#tempLogo").text(tempLogo);
      $("#tempCel").text(String.fromCharCode(176));
      $("#condition1").text(result.weather[0].main);
      getWeather(result.weather[0].main);
    }
  });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})

Data = new Date();
var Year = Data.getFullYear();
var Month = Data.getMonth();
var Day = Data.getDay();
var Chislo = Data.getDate();
var fMonth = "";
var dayWeek = "";
  if (Day == 0) dayWeek = "Sunday";
  if (Day == 1) dayWeek = "Monday";
  if (Day == 2) dayWeek = "Tuesday";
  if (Day == 3) dayWeek = "Wednesday";
  if (Day == 4) dayWeek = "Thursday";
  if (Day == 5) dayWeek = "Friday";
  if (Day == 6) dayWeek = "Saturday";

document.getElementById('day').innerHTML = dayWeek;
document.getElementById('date').innerHTML = Chislo;
switch (Month)
{
  case 0: fMonth="January"; break;
  case 1: fMonth="February"; break;
  case 2: fMonth="March"; break;
  case 3: fMonth="April"; break;
  case 4: fMonth="May"; break;
  case 5: fMonth="June"; break;
  case 6: fMonth="July"; break;
  case 7: fMonth="August"; break;
  case 8: fMonth="September"; break;
  case 9: fMonth="October"; break;
  case 10: fMonth="November"; break;
  case 11: fMonth="December"; break;
}
document.getElementById('month').innerHTML = fMonth;
function ChangeTemp(){
  if (document.getElementById('tempLogo').innerHTML == tempLogo){
    value = document.getElementById('temp').innerHTML;
    document.getElementById('tempLogo').innerHTML = "F";
    value = value * 1.8 + 32;
    if (value > 0) document.getElementById('temp').innerHTML = "+" + value;
    else
      document.getElementById('temp').innerHTML = "-" + value;
  } else {
    document.getElementById('tempLogo').innerHTML = tempLogo;
    value = document.getElementById('temp').innerHTML; 
    value = Math.floor((value - 32) / 1.8);
    document.getElementById('temp').innerHTML = value;
    if (value > 0) document.getElementById('temp').innerHTML = "+" + value;
    else
      document.getElementById('temp').innerHTML = "-" + value;
  }
}
function getWeather(condition1){
  
  switch(condition1){
      
    case 'Drizzle':
     var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/drizzle/color/24'); 
      $('img').attr('src', test); 
      break;
    case 'Clouds':
    var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/cloud/color/24'); 
      $('img').attr('src', test); 
      break;
    case 'Rain':
      var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/rain/color/24'); 
      $('img').attr('src', test); 
      break;
    case 'Snow':
      var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/snow/color/24'); 
      $('img').attr('src', test); 
      break;
    case 'Clear':
 var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/sun/color/24'); 
      $('img').attr('src', test); 
      break;
    case 'Thunderstom':
      var test = $('img').attr('src').replace('https://png.icons8.com/rain/ios7/50', 'https://png.icons8.com/thunder/color/24'); 
      $('img').attr('src', test); 
      break;
      
   }
}