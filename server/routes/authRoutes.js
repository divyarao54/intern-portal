const express = require('express');
const { registerIntern, loginIntern } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerIntern);
router.post('/login', loginIntern);

module.exports = router;
