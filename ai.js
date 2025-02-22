const express = require('express');
const { getSuggestions } = require('../controllers/aiController');

const router = express.Router();

router.post('/suggestions', getSuggestions);

module.exports = router;