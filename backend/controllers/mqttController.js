const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://mqtt.eclipse.org", {clientId: "keknode"});

const BoatSchema = require('../models/boat');

client.on("connect", function () {
    console.log("connected");
    client.subscribe("boats/0/geo/lng")
    client.subscribe("boats/0/geo/lat")
})

client.on('message', function (topic, message, packet) {

    const topicList = topic.split('/')
    const boatId = topicList[1]
    const type = topicList[2]
    let payload = message.toString()
    payload = parseInt(payload)

    const updateObject = topicList[3] === 'lat' ? {latitude: payload} : {longitude: payload}

    console.log(updateObject)

    BoatSchema.findOneAndUpdate(
        {boatId: boatId},
        {$set: updateObject},
        {upsert: true, useFindAndModify:false, new: true}
    ).then(res => console.log(res))
});

exports.setStatus = function (req, res) {
    const open = req.body.open
    if (open) {
        client.publish("boats/0/status", "open")
    } else {
        client.publish("boats/0/status", "close")
    }
};
