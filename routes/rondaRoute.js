// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const rondaController = require('../controller/rondaController');

router.get('/ronda', rondaController.getRondas );
router.post('/ronda', rondaController.createRonda);

module.exports = router;
