const express = require('express');
const router = express.Router();

const boatController = require('../controllers/controller');
const mqttController = require('../controllers/mqttController');

router.get('/boat', boatController.getData);

router.post('/status', mqttController.setStatus);

module.exports = router;
