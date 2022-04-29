import express from 'express';
import { importLatestOntarioPlaceReadings } from '../../utils/import/ontario-place';
import { importWeather } from '../../utils/import/weather';
import { backfillTorontoBeaches, importTorontoBeachReadings } from '../../utils/import/toronto-beaches';
import { backfillWeather } from '../../utils/backfill/weather';

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

router.get('/weather/historical', async (req, res) => {
  const result = await backfillWeather();
  res.status(200).send(result);
});

router.get('/beaches/historical', async (req, res) => {
  try {
    const result = await backfillTorontoBeaches();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});


// router.get('/toronto-beaches', async (req, res) => {
//   const { startDate, endDate } = req.query;
//   if (!startDate || !endDate || typeof startDate !== 'string' || typeof endDate !== 'string') {
//     res.status(400).send('You must include a start end end date');
//     return;
//   }

//   const beaches = await getTorontoReadings(startDate, endDate);

//   const db = mongo.getDb();

//   try {
//     await db.collection('records').drop();
//     await db.createCollection('records');
//   } catch (err) {
//     console.error(err);
//   }

//   const entry = await db
//     .collection('records')
//     .insertMany(beaches);

//   res.status(200).json({ inserted: entry.insertedCount });

// });

// // Define the about route
// router.get('/ontario-place', async (req, res) => {
//   const results = await getOntarioPlaceReading();
//   const test = await insertOntarioPlaceReadings(results);
//   console.log('test', test);
//   res.status(200).send(test);
// });

// router.get('/weather', async (req, res) => {
//   const result = await backfillWeather();
//   res.status(200).send(result);
// });




module.exports = router;
