import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { beachNameToID } from 'src/utils/beachRouteMatch';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';
import { fuzzyMatchBeachNameToID } from 'src/utils/beaches/get-name';
import { daysAgo } from 'src/utils/time';


type BeachDataForAssistant = {
  beachId: number;
  beachName: string;
  collectionDate: string;
  assistantData: {
    humanReadableDate: string;
  };
  eColi: number;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lastUpdate = await getLastTorontoBeachUpdate()
  const readings = await getTorontoReadings(lastUpdate, lastUpdate)
  const beachName  = req.query.beachName?.toString().toLowerCase() 

  if (!beachName) {
    return res.status(400).send({ error: 'Missing beach name' })
  }

  const beachID = fuzzyMatchBeachNameToID(beachName)

  const collectionDate = readings[0].CollectionDate;
  const specificBeachData: BeachDataForAssistant = readings[0].data.reduce((accum: BeachDataForAssistant, reading: BeachDataForAssistant) => {
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

  res.send({ beachData: specificBeachData })
}