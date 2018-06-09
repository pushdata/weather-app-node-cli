var request = require('request');

var getWeather = (lat, lon, callback) => {
request({
    url: `https://api.darksky.net/forecast/2eee74e2ce8f4e8254f5c790adab7e51/${lat},${lon}`,
    json: true
}, (error, response, body) => {
    if(error) {
        callback('Unable to connect to weather api server');
    } else if(!error && response.statusCode === 200) {
        var weatherData = {
            currentTemperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        }
        callback(undefined, weatherData);
    } else {
        callback('Invalid Coordinates');
    }
})
}

module.exports.getWeather = getWeather;