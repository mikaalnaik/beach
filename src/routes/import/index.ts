import mongo from '../../mongo';
import express from 'express';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/beaches', async (req, res) => {
  // get toronto latest
  // get ontario place latest
  // store in mongo

});

// Define the about route
router.get('/about', async (_, res) => {
  res.send('About us');
});


module.exports = router;
