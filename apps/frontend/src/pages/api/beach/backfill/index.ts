import dayjs from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { sql } from '@vercel/postgres';



const START_OF_TORONTO_RECORDS = '2007-01-01';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {

  const startDate = START_OF_TORONTO_RECORDS;
  const endDate = dayjs().format('YYYY-MM-DD');

  const results = await getTorontoReadings(startDate, endDate)
  const arrayOfBeachReadings = results.reduce((accum, dailyReadings) => {
    if (dailyReadings.data) {
      const date = dayjs(dailyReadings.CollectionDate).toDate();
      const readings = dailyReadings.data.map(reading => {
        delete reading.beachName;
        return {
          ...reading,
          date: date,
        }
      })
      return [...accum, ...readings];
    } else {
      return accum;
    }
  }, [])

  const inserts = await arrayOfBeachReadings.map(async reading => {
    try {
      return await sql`INSERT INTO beach_readings (beach_id, e_coli, advisory, status_flag, status_flag_pre, date) VALUES (${reading.beachId}, ${reading.eColi}, ${reading.advisory}, ${reading.statusFlag}, ${reading.statusFlagPre}, ${reading.date});`;
    } catch (error) {
      console.error('Error inserting reading', error);
      return error;
    }
  })

  const insertResults = await Promise.all(inserts)

  res.status(200).json({ message: insertResults });
}
