import { BeachIds } from '../../consts/beachIds';
import express, { Request } from 'express';
import { getLatestReadingForSpecificBeach } from '../../utils/import/ontario-place';
import mongo from '../../mongo';

const router = express.Router();

router.get('/latest', async (req, res) => {
  const db = mongo.getDb();
  const ontarioPlaceResult = await db.collection('records')
    .find({
      [`beachReadings.${BeachIds.OntarioPlace}`]: {
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .limit(1)
    .toArray();
  const cityOfTorontoResult = await db.collection('records')
    .find({
      [`beachReadings.${BeachIds.HanlansPointBeach}`]: { // this could be any Toronto beach
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .limit(1)
    .toArray();
  res.send({ ontarioPlaceResult, cityOfTorontoResult });
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





export default router;
