const express = require('express');
const router = express.Router();
const { getInternInfo } = require('../controllers/internController');

router.get('/:referralCode', getInternInfo);

module.exports = router;