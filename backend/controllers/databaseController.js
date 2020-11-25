const BoatSchema = require('../models/boat');

exports.getData = function (req, res) {
    BoatSchema.find({}, '')
        .then(boat => res.send(boat))
        .catch(error => res.send(error));
};

exports.updateGeo = (payload) => {
    const updateObject = convertToLatLong(payload)

    BoatSchema.findOneAndUpdate(
        {boatId: 0},
        {$set: updateObject},
        {upsert: true, useFindAndModify: false, new: true}
    ).then(res => console.log(res))
}

const convertToLatLong = (nmea) => {
    const list = nmea.split(',')
    let lat = list[0]
    lat = (Number(lat.slice(0, 2)) + (Number(lat.slice(2, 9)) / 60)).toFixed(4)
    let long = list[2]
    long = ((Number(long.slice(0, 3)) + (Number(long.slice(3, 10)) / 60))).toFixed(4)

    return ({latitude: lat, longitude: long})
}