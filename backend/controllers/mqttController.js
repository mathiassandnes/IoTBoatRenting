const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://mqtt.eclipse.org", {clientId: "keknode"});

const Door = require('../models/door');
const doorId = 0

exports.setup = () => {
    client.on("connect", function () {
        console.log("connected");
        client.subscribe("doorMonitor/timestamp")
    })

    client.on('message', function (topic, message, packet) {
        let payload = message.toString()
        payload = parseInt(payload)

        Door.findOneAndUpdate(
            {doorId: doorId},
            {$push: {doorOpenings: payload}},
            {upsert: true, useFindAndModify: false, new: true}
        ).then(res => console.log(res))
    });
}

exports.setLimit = function (req, _) {
    const limit = req.body.limit
    client.publish("doorMonitor/limit", limit)
};
