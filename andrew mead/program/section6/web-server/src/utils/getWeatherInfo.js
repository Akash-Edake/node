const request = require("postman-request");
const getWeatherInfo = (city, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=07540ffc77eb9695997ccfeb0a35662c&query=${city}`;

  request(weatherUrl, function (error, response, body) {
    if (error) {
      console.log("unable to conect...!");
      callback("unable to conect...!");
      return;
    }
    console.log("statusCode:", response.statusCode ?? "not found");
    const data = JSON.parse(body).current;
    console.log(
      `current temperature is ${data.temperature}°C and wind speed is nearly ${data.wind_speed} Km`
    );
    callback(JSON.parse(body));
    console.log("weather app conected");
  });
};

module.exports = getWeatherInfo;
