const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const test = new Schema({
    id: Schema.Types.ObjectID,
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
}, { collection : 'Test' });

//Export model
module.exports = mongoose.model('Test', test);
