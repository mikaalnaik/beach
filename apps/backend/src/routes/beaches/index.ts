import { BeachIds } from '../../consts/beachIds';
import express, { Request } from 'express';
import { getLatestReadingForSpecificBeach } from '../../utils/import/ontario-place';
import mongo from '../../mongo';
import { getLatestTorontoReadings } from '../../utils/import/toronto-beaches';
import { getLatestOntarioPlaceReading } from '../../utils/ontario-place/get-latest';
import { getOntarioPlaceReading } from 'utils/ontario-place/get-swim-drink-fish-data';

const router = express.Router();

router.get('/latest', async (req, res) => {
  const waterKeeperReadings = await getOntarioPlaceReading();
  const ontarioPlaceReading = await getLatestOntarioPlaceReading(waterKeeperReadings);
  const cityOfTorontoReadings = await getLatestTorontoReadings();
  const formattedCityOfTorontoResult = Object.values(cityOfTorontoReadings[0].beachReadings);
  const beaches = [...formattedCityOfTorontoResult, ontarioPlaceReading];
  res.send(beaches);
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
    const beachData = result.beachReadings[requestedBeachId];
    res.send(beachData);
  } else {
    res.status(400).send('Invalid beach id');
  }
});






module.exports = router;
