const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/apiMoviesController');

router.post('/api/movies/create', apiMoviesController.create);
router.delete('/api/movies/destroy/:id', apiMoviesController.destroy);

module.exports = router;