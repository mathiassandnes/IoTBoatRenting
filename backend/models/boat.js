const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoatSchema = new Schema({
    boatId: Number,
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
}, { collection : 'boats' });

module.exports = mongoose.model('Boat', BoatSchema);
