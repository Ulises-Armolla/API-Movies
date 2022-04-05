const express = require('express');
const router = express.Router();
const apiActorsController = require('../../controllers/api/apiActorsController');

router.get('/api/actors', apiActorsController.list);
router.get('/api/actors/:id', apiActorsController.detail);

module.exports = router;