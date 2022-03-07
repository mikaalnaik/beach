import { WeatherStations } from 'consts/weatherStations';
import dayjs from 'dayjs';
import express from 'express';
import { parseWeatherXML } from 'utils/backfill/weather';
import { getWeather } from 'utils/backfill/weather/get-weather';
import { importLatestOntarioPlaceReadings } from 'utils/import/ontario-place';
import { importTorontoBeachReadings } from '../../utils/import/toronto-beaches';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/beaches', async (req, res) => {
  const results = await importLatestOntarioPlaceReadings();
  const torontoResults = await importTorontoBeachReadings();
  res.send({ results, torontoResults });
});


router.get('/weather', async (req, res) => {
  const month = dayjs().month() + 1;
  const year = dayjs().year();

  const rawWeather = await getWeather(year, WeatherStations.PostJune2013);
  const weather = await parseWeatherXML(rawWeather);

  console.log('weather', weather);

  res.send({ weather, month, year });




});

// Define the about route
router.get('/about', async (_, res) => {
  res.send('About us');
});


module.exports = router;
