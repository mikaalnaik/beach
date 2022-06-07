import { BeachIds } from '../../consts/beachIds';
import express, { Request } from 'express';
import { getLatestReadingForSpecificBeach } from '../../utils/import/ontario-place';
import mongo from '../../mongo';
import { getLastReportingDateFromToronto } from '../../utils/import/toronto-beaches';
import { getTorontoReadings } from '../../data/toronto-beaches';

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

  const endDate = await getLastReportingDateFromToronto();
  const readings = await getTorontoReadings(endDate, endDate);


  const formattedCityOfTorontoResult = Object.values(readings[0].beachReadings);
  const formattedOntarioPlaceReading = ontarioPlaceResult[0].beachReadings['15'];
  const beaches = [...formattedCityOfTorontoResult, formattedOntarioPlaceReading];


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
