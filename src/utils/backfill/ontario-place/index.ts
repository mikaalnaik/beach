import fetch from 'isomorphic-unfetch';
import { WaterKeeperResponse, WaterKepperReading } from 'types/waterkeeper-response';
import { filterOntarioPlaceReadings } from './filter-ontario-place-readings';
import { formatOntarioPlaceReading } from './format-response';
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { BeachIds } from 'consts/beachIds';

export const getOntarioPlaceReading = async () => {
  const swimGuideData: WaterKeeperResponse = await fetch('http://translate.theswimguide.org/toronto/json').then(res => res.json());
  const ontarioPlaceReadings = filterOntarioPlaceReadings(swimGuideData);
  return ontarioPlaceReadings.map(formatOntarioPlaceReading);
};

export const insertOntarioPlaceReadings = async (readings: WaterKepperReading[]) => {
  const db = mongo.getDb();
  return readings.map(async reading => {
    const filter = {
      collectionDate: dayjs(reading.collectionDate).format('YYYY-MM-DD').toString(),
    };
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        [`beachReadings.${BeachIds.OntarioPlace}`]: reading,
      },
    };
    const result = await db.collection('records')
      .updateOne(filter, updateDoc, options)
      .catch(console.error);
    return result;
  });
};
