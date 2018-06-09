const request = require('request');

const requestKey = 'AIzaSyAecQYhu12BtTLvutyE34VY8k4d7BKvIsQ';

var getData = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    request({url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=${requestKey}`, json:true}, (error, response, body) => {
    if(error) {
        callback('Unable to connect to Google Servers');
    } else if(body.status === 'ZERO_RESULTS') {
        callback('Invalid address');
    } else if(body.status === 'OK') {
    
        callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
    });
    }
});
}


module.exports.geocodeAddress = getData;
