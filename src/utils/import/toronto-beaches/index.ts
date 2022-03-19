
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { getTorontoReadings } from '../../../data/toronto-beaches';

import type { TFormattedBeachReadings } from 'types/toronto-city-response';

export const importTorontoBeachReadings = async () => {
  const endDate = await getLastReportingDateFromToronto();
  const exists = await checkIfReadingExistsInMongo(endDate);
  if (!exists) {
    const readings = await getTorontoReadings(endDate, endDate);
    readings.map(insertBeachReading);
    return { message: `Successful insertion of ${readings.length} readings` };
  }
  return { message: 'No new readings' };
};

export const getLatestTorontoReadings = async () => {
  const endDate = await getLastReportingDateFromToronto();
  const startDate = dayjs(endDate).subtract(1, 'day').format('YYYY-MM-DD');
  const beachReadings = await getTorontoReadings(startDate, endDate);
  return beachReadings;
};

// As this is publication date, the collection date will be -1 day before this date
// so we subtract to get the last collection date
const getLastReportingDateFromToronto = async () => {
  const { lastUpdate } = await fetch('https://secure.toronto.ca/opendata/adv/last_update/v1?format=json').then(res => res.json());
  return dayjs(lastUpdate).subtract(1, 'day').format('YYYY-MM-DD');
};



const checkIfReadingExistsInMongo = async (collectionDate: string) => {
  const db = mongo.getDb();
  const collection = db.collection('records');
  const dateInMongo = await collection
    .find({
      collectionDate,
      beachReadings: {
        $exists: true,
      },
    })
    .count();
  return dateInMongo > 0;
};


export const insertBeachReading = async (beachReading: TFormattedBeachReadings) => {
  const db = mongo.getDb();

  const filter = { collectionDate: dayjs(beachReading.collectionDate).format('YYYY-MM-DD').toString() };
  const options = { upsert: true, merge: true };

  const updateDoc = {
    $set: {
      beachReading,
    },
  };

  const result = await db.collection('records')
    .updateOne(filter, updateDoc, options)
    .then(result => result)
    .catch(console.error);
  return result;
};
