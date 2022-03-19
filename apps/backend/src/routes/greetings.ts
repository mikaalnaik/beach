import express from 'express';
const path = require('path');

const router = express.Router();

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/index.html'));
});


module.exports = router;
