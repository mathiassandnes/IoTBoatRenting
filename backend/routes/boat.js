const express = require('express');
const router = express.Router();

const boatController = require('../controllers/controller');
const mqttController = require('../controllers/mqttController');

router.get('/boat', boatController.getData);
router.get('/state', mqttController.getState);

router.post('/status', mqttController.setStatus);
router.post('/gpsFrequency', mqttController.setGPSFrequency);

module.exports = router;
