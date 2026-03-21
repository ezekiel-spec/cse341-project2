const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/movies', require('./movies'));
// router.use('/actors', require('./actors')); // We will add this once movies are working

module.exports = router;