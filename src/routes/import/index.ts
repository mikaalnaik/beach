import express from 'express';
import { importLatestOntarioPlaceReadings } from 'utils/import/ontario-place';
import { importWeather } from 'utils/import/weather';
import { importTorontoBeachReadings } from '../../utils/import/toronto-beaches';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Define the home page route
router.get('/beaches', async (req, res) => {
  const ontarioPlaceReadings = await importLatestOntarioPlaceReadings();
  const torontoResults = await importTorontoBeachReadings();
  res.send({ ontarioPlaceReadings, torontoResults });
});


router.get('/weather', async (req, res) => {
  const weather = await importWeather();
  res.send({ weather });
});

// Define the about route
router.get('/about', async (_, res) => {
  res.send('About us');
});


module.exports = router;
