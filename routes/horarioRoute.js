// routes/horarioRoutes.js
const express = require('express');
const router = express.Router();
const horarioController = require('../controller/horarioController');

router.get('/horario', horarioController.getHorarios);
router.post('/horario', horarioController.createHorario);

module.exports = router;
