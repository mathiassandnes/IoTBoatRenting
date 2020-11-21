const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoorUnlockSchema = new Schema({
    doorId: Number,
    doorOpenings: Array

}, { collection : 'Doors' });

module.exports = mongoose.model('Door', DoorUnlockSchema);
