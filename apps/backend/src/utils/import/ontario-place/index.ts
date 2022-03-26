import { WaterKepperReading } from 'types/waterkeeper-response';
import { BeachIds } from '../../../consts/beachIds';
import { getOntarioPlaceReading, insertOntarioPlaceReadings } from '../../backfill/ontario-place';
import mongo from '../../../mongo';
import { filterOutOntarioPlaceReadingsByDate } from './filter-out-ontario-place-readings-by-date';


export const importLatestOntarioPlaceReadings = async () => {
  const ontarioPlaceReadings = await getOntarioPlaceReading();
  const latestBeachReading = await getLatestReadingForSpecificBeach(BeachIds.OntarioPlace);
  const { collectionDate } = latestBeachReading || {};
  const test = filterOutOntarioPlaceReadingsByDate(ontarioPlaceReadings, collectionDate);
  const results = await insertOntarioPlaceReadings(test);
  return { results };
};

export const getLatestReadingForSpecificBeach = async (beachId: BeachIds) => {
  const db = mongo.getDb();
  const collection = db.collection('records');

  // FIX: this type is incorrectly used here
  const latest = await collection.find<WaterKepperReading>({
    [`beachReadings.${beachId}`]: {
      $exists: true,
    },
  })
    .sort( { collectionDate: -1 } )
    .limit(1)
    .toArray();
  return latest[0];
};
