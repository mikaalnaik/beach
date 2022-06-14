import mongo from '../../mongo';
import dayjs from 'dayjs';
import { BeachIds } from '../../consts/beachIds';

import type { WaterKepperReading } from '../../types/waterkeeper-response';

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
