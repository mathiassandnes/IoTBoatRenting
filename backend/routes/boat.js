const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/databaseController');
const mqttController = require('../controllers/mqttController');

router.get('/boat', databaseController.getData);
router.get('/state', mqttController.getState);

router.post('/status', mqttController.setStatus);
router.post('/gpsFrequency', mqttController.setGPSFrequency);

module.exports = router;
