const Test = require('../models/test');

exports.getData = function (req, res) {

    Test.find({}, '')
        .limit(10)
        .then(boat => res.send(boat))
        .catch(error => res.send(error));
};
