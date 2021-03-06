import { BeachIds } from '../../../consts/beachIds';
import { insertOntarioPlaceReadings } from '../../ontario-place';
import mongo from '../../../mongo';
import { filterOutOntarioPlaceReadingsByDate } from './filter-out-ontario-place-readings-by-date';
import { getOntarioPlaceReading } from '../../../utils/ontario-place/get-swim-drink-fish-data';


export const importLatestOntarioPlaceReadings = async () => {
  const ontarioPlaceReadings = await getOntarioPlaceReading();
  const latestBeachReading = await getLatestReadingForSpecificBeach(BeachIds.OntarioPlace);
  const { collectionDate } = latestBeachReading || {} as any;
  const test = filterOutOntarioPlaceReadingsByDate(ontarioPlaceReadings, collectionDate);
  const results = await insertOntarioPlaceReadings(test);
  return { results };
};

export const getLatestReadingForSpecificBeach = async (beachId: BeachIds) => {
  const db = mongo.getDb();
  const collection = db.collection('records');

  const latest = await collection.find({
    [`beachReadings.${beachId}`]: {
      $exists: true,
    },
  })
    .sort( { collectionDate: -1 } )
    .limit(1)
    .toArray();
  return latest[0];
};
