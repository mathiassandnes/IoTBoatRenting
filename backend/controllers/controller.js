const BoatSchema = require('../models/boat');

const mqtt = require('mqtt');


// const client = mqtt.connect("mqtt://mqtt.eclipse.org", {clientId: "keknode"});


exports.getData = function (req, res) {
    BoatSchema.find({}, '')
        .then(boat => res.send(boat))
        .catch(error => res.send(error));
};

exports.setStatus = function (req, res) {
    // const open = req.body.open
    // if (open) {
    //     client.publish("boats/0/status", "open")
    // } else {
    //     client.publish("boats/0/status", "close")
    // }
};
