import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { beachNameToID } from 'src/utils/beachRouteMatch';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';
import { matchBeachName } from 'src/utils/beaches/get-name';
import { daysAgo } from 'src/utils/time';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lastUpdate = await getLastTorontoBeachUpdate()
  const readings = await getTorontoReadings(lastUpdate, lastUpdate)
  const beachName  = req.query.beachName?.toString().toLowerCase() 

  if (!beachName) {
    return res.status(400).send({ error: 'Missing beach name' })
  }

  const beachID = matchBeachName(beachName)

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