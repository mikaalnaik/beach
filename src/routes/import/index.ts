import mongo from '../../mongo';
import express from 'express';
import { getLatestTorontoReadings, insertBeachReading } from '../../utils/import/toronto-beaches';

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

  const results = await getLatestTorontoReadings();
  const collectionDate = results[0].collectionDate;

  const db = mongo.getDb();

  const dateInMongo = await db.collection('records')
    .find({ collectionDate })
    .toArray();

  if (!dateInMongo) {
    // insertBeachReading(results);
  }
  console.log('dateInMongo', dateInMongo);

  // check to see if we have that data in mongo
  res.send(results);

});

// Define the about route
router.get('/about', async (_, res) => {
  res.send('About us');
});


module.exports = router;
