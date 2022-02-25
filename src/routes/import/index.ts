import express from 'express';
import { importTorontoBeachReadings } from '../../utils/import/toronto-beaches';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/beaches', async (req, res) => {
  const results = await importTorontoBeachReadings();
  res.send(results);
});

// Define the about route
router.get('/about', async (_, res) => {
  res.send('About us');
});


module.exports = router;
