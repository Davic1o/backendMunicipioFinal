// routes/datauserRoutes.js
const express = require('express');
const router = express.Router();
const dataUserController = require('../controller/dataUserController');

router.get('/datauser', dataUserController.getDataUsers);
router.post('/datauser', dataUserController.createDataUsers);
router.put('/datauser/:userId', dataUserController.updateUserAprobar);

module.exports = router;
