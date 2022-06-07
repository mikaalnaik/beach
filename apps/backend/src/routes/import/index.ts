import express from 'express';
import { importLatestOntarioPlaceReadings } from '../../utils/import/ontario-place';
import { importWeather } from '../../utils/import/weather';
import { importTorontoBeachReadings } from '../../utils/import/toronto-beaches';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  const expectedHeader = `Bearer ${process.env.API_KEY}`;
  const gotHeader = req.headers['authorization'];

  if (!gotHeader || gotHeader !== expectedHeader) {
    res.status(401).send('Unauthorized');
  } else {
    next();
  }
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


module.exports = router;
