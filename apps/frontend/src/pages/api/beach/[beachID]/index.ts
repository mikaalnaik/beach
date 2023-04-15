import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';
import { daysAgo } from 'src/utils/time';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lastUpdate = await getLastTorontoBeachUpdate()
  const readings = await getTorontoReadings(lastUpdate, lastUpdate)
  const beachID  = Number(req.query.beachID)

  const collectionDate = readings[0].CollectionDate;
  const beachData = readings[0].data.reduce((accum: Record<string, unknown>, reading: Record<string, unknown>) => {
    if (reading.beachId !== beachID) {
      return accum
    } else {
      return {
        ...reading,
        collectionDate,
        assistantData: {
          humanReadableDate: daysAgo(collectionDate),
        }
      }
    }
  }, {})

  res.send({ beachData })
}