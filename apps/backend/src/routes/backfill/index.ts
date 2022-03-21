import express from 'express';
import mongo from '../../mongo';
import { backfillWeather } from '../../utils/backfill/weather';
import { getOntarioPlaceReading, insertOntarioPlaceReadings } from '../../utils/backfill/ontario-place';
import { getTorontoReadings } from '../../data/toronto-beaches';

const router = express.Router();
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/toronto-beaches', async (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate || typeof startDate !== 'string' || typeof endDate !== 'string') {
    res.status(400).send('You must include a start end end date');
    return;
  }

  const beaches = await getTorontoReadings(startDate, endDate);

  const db = mongo.getDb();

  try {
    await db.collection('records').drop();
    await db.createCollection('records');
  } catch (err) {
    console.error(err);
  }

  const entry = await db
    .collection('records')
    .insertMany(beaches);

  res.status(200).json({ inserted: entry.insertedCount });

});

// Define the about route
router.get('/ontario-place', async (req, res) => {
  const results = await getOntarioPlaceReading();
  const test = await insertOntarioPlaceReadings(results);
  console.log('test', test);
  res.status(200).send(test);
});

router.get('/weather', async (req, res) => {
  const result = await backfillWeather();
  res.status(200).send(result);
});

export default router
