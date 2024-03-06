// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const sectorController = require('../controller/sectorController');

router.get('/sector', sectorController.getSectores );
router.post('/sector', sectorController.createSector);

module.exports = router;
