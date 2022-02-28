import { BeachIds } from 'consts/beachIds';
import express, { Request } from 'express';
import { getLatestReadingForSpecificBeach } from 'utils/import/ontario-place';
import mongo from '../../mongo';

const router = express.Router();

router.get('/latest', async (req, res) => {
  const db = mongo.getDb();
  const result = await db.collection('records')
    .find({
      [`beachReadings.${BeachIds.OntarioPlace}`]: {
        $exists: true,
      },
      [`beachReadings.${BeachIds.HanlansPointBeach}`]: { // this could be any Toronto beach
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .limit(1)
    .toArray();
  res.send(result);
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
