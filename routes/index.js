const express = require('express');
const router = express.Router();

const test = require('../controllers/controller');

router.get('/kek', test.getData);

module.exports = router;
