import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Welcome to the Toronto Beach API! Check out the code at https://github.com/mikaalnaik/beach-backend. Feel free to create a PR or an Issue there!');
});


module.exports = router;
