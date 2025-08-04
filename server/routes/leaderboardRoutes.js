const express = require('express');
const router = express.Router();

// Example dummy route
router.get('/', (req, res) => {
  res.json([{ name: 'Divya', donations: 1200 }]);
});

module.exports = router; // ✅
