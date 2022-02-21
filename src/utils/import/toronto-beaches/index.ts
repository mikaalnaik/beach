
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { getTorontoReadings } from '../../../data/toronto-beaches';
import { TBeachReading } from 'types/toronto-city-response';

export const getLatestTorontoReadings = async () => {
  const endDate = await getLastReportingDateFromToronto();
  const startDate = dayjs(endDate).subtract(1, 'day').format('YYYY-MM-DD');
  const beachReadings = await getTorontoReadings(startDate, endDate);
  return beachReadings;
};


const getLastReportingDateFromToronto = async () => {
  const { lastUpdate } = await fetch('https://secure.toronto.ca/opendata/adv/last_update/v1?format=json').then(res => res.json());
  return dayjs(lastUpdate).format('YYYY-MM-DD');
};


export const insertBeachReading = async (beachReading: TBeachReading) => {
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
