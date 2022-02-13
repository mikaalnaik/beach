import express from 'express';
import mongo from '../mongo';
import formatBackfill from '../utils/backfill/backfill-toronto-beach';
import fetch from 'isomorphic-unfetch';
import { RawTorontoBeachDateResponse } from 'types/toronto-city-response';
import { getOntarioPlaceReading } from '../utils/backfill/ontario-place';

const router = express.Router();
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/toronto-beaches', async (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) {
    res.status(400).send('You must include a start end end date');
    return;
  }

  const rawResponse = await fetch(
    `https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`
  );
  const response = await rawResponse.json() as RawTorontoBeachDateResponse;
  const formattedResponse = formatBackfill(response);


  const db = mongo.getDb();

  try {
    await db.collection('records').drop();
    await db.createCollection('records');
  } catch (err) {
    console.error(err);
  }

  const entry = await db
    .collection('records')
    .insertMany(formattedResponse);

  res.status(200).json({ entry });

});

// Define the about route
router.get('/ontario-place', async (req, res) => {
  const results = await getOntarioPlaceReading();
  res.status(200).send(results);
});


module.exports = router;
