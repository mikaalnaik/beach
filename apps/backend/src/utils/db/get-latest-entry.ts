import { BeachIds } from '../../consts/beachIds';
import mongo from '../../mongo';

export const getLatestEntry = (id: BeachIds) => {
  const db = mongo.getDb();

  return db.collection('records')
    .find({
      [`beachReadings.${id}`]: {
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .toArray();
};
