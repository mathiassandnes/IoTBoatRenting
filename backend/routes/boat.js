const express = require('express');
const router = express.Router();

const boatController = require('../controllers/controller');

router.get('/boat', boatController.getData);

router.post('/status', boatController.setStatus);

module.exports = router;
