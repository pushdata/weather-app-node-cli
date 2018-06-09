const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const parsedArgs = yargs.options({
    address : {
        describe: 'Enter the address',
        demand: true,
        alias: 'a',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(parsedArgs.address, (error, results) => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Address : ${results.address}`);
        weather.getWeather(results.latitude,results.longitude, (errorData, weatherResults) => {
            if(errorData) {
                console.log(errorData);
            } else {
                console.log(`It's currently ${weatherResults.currentTemperature} and it feels like ${weatherResults.apparentTemperature}`);
            }
        })
    }
});



