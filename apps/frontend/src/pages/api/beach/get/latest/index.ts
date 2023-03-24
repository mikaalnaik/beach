import { NextApiRequest, NextApiResponse } from 'next';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const lastUpdate = await getLastTorontoBeachUpdate()
  const readings = await getTorontoReadings(lastUpdate, lastUpdate)

  const collectionDate = readings[0].CollectionDate;
  const beachData = readings[0].data.map(reading => {
    return {
      ...reading,
      collectionDate
    }
  })

  res.send({ beachData })
}