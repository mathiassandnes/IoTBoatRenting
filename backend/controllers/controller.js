const DoorSchema = require('../models/door');

exports.getData = function (req, res) {
    DoorSchema.find({}, '')
        .then(boat => res.send(boat))
        .catch(error => res.send(error));
};



