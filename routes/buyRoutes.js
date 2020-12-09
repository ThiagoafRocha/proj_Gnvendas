const express = require('express');

const router = express.Router();

const buyController = require('./../controller/buyController');

router.post('/', buyController.create);

module.exports = router;