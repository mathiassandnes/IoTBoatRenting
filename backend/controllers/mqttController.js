
const mqtt = require('mqtt');
const databaseController = require("./databaseController");
const client = mqtt.connect("mqtt://mqtt.eclipse.org", {clientId: "keknode"});

let boatConnected = "ikke tilkoblet"

let messageObject = {
    "boats/0/lock-status/ack": null,
    "boats/0/time-between-gps-updates/ack": null,
}


client.on("connect", function () {
    console.log("connected")
    client.subscribe("boats/0/GPSNMEA")
    client.subscribe("boats/0/lock-status/ack")
    client.subscribe("boats/0/time-between-gps-updates/ack")
    client.subscribe("boats/0/connected")
})

client.on('message', function (topic, message, packet) {

    const topicList = topic.split('/')
    const boatId = topicList[1]
    const type = topicList[2]
    let payload = message.toString()

    switch (type) {
        case "GPSNMEA":
            databaseController.updateGeo(payload);
            break;
        case "lock-status":
            messageObject["boats/0/lock-status/ack"] = payload;
            break;
        case "time-between-gps-updates":
            messageObject["boats/0/time-between-gps-updates/ack"] = payload;
            break;
        case "connected":
            boatConnected = payload === "true" ? "tilkoblet" : "ikke tilkoblet"
    }

});


exports.setStatus = function (req, res) {
    const open = req.body.open
    if (open) {
        publishMqtt("boats/0/lock-status", "open", true)
    } else {
        publishMqtt("boats/0/lock-status", "close", true)
    }
};

exports.setGPSFrequency = function (req, res) {
    publishMqtt("boats/0/time-between-gps-updates", req.body.gpsFrequency.toString(), true)
}


exports.getState = function (req, res) {
    res.send(boatConnected)
}

const publishMqtt = (topic, payload, withAck = false) => {

    const receivedAck = messageObject[topic + "/ack"] === payload
    if(receivedAck)
        return

    client.publish(topic + "/command", payload)
    if (withAck)
        setTimeout(() => publishMqtt(topic, payload, true), 10000, topic, payload)
}
