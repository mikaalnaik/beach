import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Welcome to the Toronto Beach API! Check out the docs/code at https://github.com/mikaalnaik/beach-backend');
});


module.exports = router;
