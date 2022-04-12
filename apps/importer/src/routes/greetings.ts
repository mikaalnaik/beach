import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Checkout the code at https://github.com/mikaalnaik/beach-backend');
});


module.exports = router;
