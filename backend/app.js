const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/boat');
const app = express();
const cors = require('cors');

const mqtt = require('mqtt');

const mongoose = require('mongoose');
const Boat = require('./models/boat');

const mongoDB =
    'mongodb+srv://root:D380LkxgF2TpLiOc@cluster0.8fxnb.mongodb.net/Exam?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const client = mqtt.connect("mqtt://mqtt.eclipse.org", {clientId: "keknode"});
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

    Boat.findOneAndUpdate(
        {boatId: boatId},
        {$set: updateObject},
        {upsert: true, useFindAndModify:false, new: true}
    ).then(res => console.log(res))
});


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
module.exports = app;
