import { BeachIds } from '../../consts/beachIds';
import express, { Request } from 'express';
import { getLatestReadingForSpecificBeach } from '../../utils/import/ontario-place';
import mongo from '../../mongo';

const router = express.Router();

router.get('/:id', async (req, res) => {
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

router.get('/all-time', async (req, res) => {
  const db = mongo.getDb();
  const ontarioPlaceResult = await db.collection('records')
    .find({
      [`beachReadings.${BeachIds.OntarioPlace}`]: {
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .toArray();
  const cityOfTorontoResult = await db.collection('records')
    .find({
      [`beachReadings.${BeachIds.HanlansPointBeach}`]: { // this could be any Toronto beach
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .toArray();
  res.send({ ontarioPlaceResult, cityOfTorontoResult });
});

router.get('/:id', async (req: Request<{ id: BeachIds }>, res) => {
  const requestedBeachId = req.params.id;
  if (requestedBeachId in BeachIds) {
    const result = await getLatestReadingForSpecificBeach(requestedBeachId);
    res.send(result);
  } else {
    res.status(400).send('Invalid beach id');
  }
});






module.exports = router;
