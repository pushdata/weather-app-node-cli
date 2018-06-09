const yargs = require('yargs');
const geocode = require('./geocode/geocodeapi');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});



