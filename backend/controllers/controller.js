const BoatSchema = require('../models/boat');

exports.getData = function (req, res) {
    BoatSchema.find({}, '')
        .then(boat => res.send(boat))
        .catch(error => res.send(error));
};
