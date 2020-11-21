const express = require('express');
const router = express.Router();

const doorController = require('../controllers/controller');
const mqttController = require('../controllers/mqttController');

router.get('/door', doorController.getData);

router.post('/setLimit', mqttController.setLimit)

module.exports = router;
