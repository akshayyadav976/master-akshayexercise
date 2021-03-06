const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWtzaGF5eTk3NiIsImEiOiJjazU3cHN0aGQwZ2h2M25wN3liYjEyMm8zIn0.KosZZgpOvXxDayNtHAdIVw'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('unable to connect location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }

    })

}

module.exports = geocode 