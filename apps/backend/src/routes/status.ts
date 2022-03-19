import express from 'express';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/', async (req, res) => {
  res.send('Hello from the server! It\'s alive!');
});



module.exports = router;
