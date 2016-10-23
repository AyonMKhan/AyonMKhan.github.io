$(document).ready(function() {

  var weatherDisp = $("#weatherdisp");

  var iconObj = {
    "clear-day" : "wi-forecast-io-clear-day",
    "clear-night" : "wi-forecast-io-clear-night",
    "rain" : "wi-forecast-io-rain",
    "snow" : "wi-forecast-io-snow",
    "sleet" : "wi-forecast-io-sleet",
    "wind" : "wi-forecast-io-wind",
    "fog" : "wi-forecast-io-fog",
    "cloudy" : "wi-forecast-io-cloudy",
    "partly-cloudy-day" : "wi-forecast-io-partly-cloudy-day",
    "partly-cloudy-night" : "wi-forecast-io-partly-cloudy-night",
    "hail" : "wi-forecast-io-hail",
    "thunderstorm" : "wi-forecast-io-thunderstorm",
    "tornado" : "wi-forecast-io-tornado"
  };

  $('#getweather').on("click", function() {

    var html = "";

    var celsiusSymbol = " &deg;C";
    var fahrenheitSymbol = " &deg;F";

    var weatherUrl = "https://api.darksky.net/forecast/9b699204ee32c39dcc84049707371916/";

    var ipGLUrl = "https://ipinfo.io/";
    //url for getting geolocation coordinates from ipinfo.io

    $.get(ipGLUrl, function(response) {//GET request from ipinfo for geoloc data
      var location = response.loc;
      var city = response.city;
      var country = response.country;
      var ip = response.ip;
      console.log(response.ip, response.loc, response.city, response.country);

      var finalWeatherUrl = weatherUrl +  location + "?units=si";

      $.get(finalWeatherUrl, function(weatherResponse) {//GET request from darksky

        var tempC = weatherResponse.currently.temperature;
        var tempF =  (1.8 * tempC + 32).toFixed(2);
  console.log(weatherResponse.currently);

        html = "<h4>You are in " + city +", " + country + "</h4><br>" +
          "<h4>Your Coordinates are " + location + "</h4><br>" +
          "<h4>Your IP is: " + ip + "</h4><br>" +
          "<p>" + weatherResponse.currently.summary + "</p><br>" +
          "<p class='wi " + iconObj[weatherResponse.currently.icon] + "'></p>" +
          "<h4 id='temperature' data-temp='c'>" + tempC + celsiusSymbol + "</h4><br>";

        weatherDisp.html(html)

        var temperFidelis = $("#temperature");
        temperFidelis.click(function() {
          if (temperFidelis.data("data-temp") == "c") {
            temperFidelis.data("data-temp", "f");
            temperFidelis.html(tempF + fahrenheitSymbol);
          } else {
            temperFidelis.data("data-temp", "c");
            temperFidelis.html(tempC + celsiusSymbol);
          }
        });
      }, "jsonp")
    }, "jsonp");
  });
});
