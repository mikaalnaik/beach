import express from 'express';
import mongo from '../../mongo';

const router = express.Router();

router.get('/beach-exists-no-weather/:id', async (req, res) => {
  const { id } = req.params;


  const db = mongo.getDb();
  const collection = db.collection('records');

  const latest = await collection.find({
    [`beachReadings.${id}`]: {
      $exists: true,
    },
  })
    .project({ beachReadings: { [id]: 1 }, weather: 1 })
    .sort( { collectionDate: -1 } )
    .toArray();
  res.send(latest);
});

module.exports = router;
