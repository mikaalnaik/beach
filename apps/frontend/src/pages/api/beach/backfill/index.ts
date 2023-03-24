import dayjs from 'dayjs';
import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // this is a pre-requisite
  // regions: ['iad1'], // only execute this function on iad1
};

// export default (req: NextRequest) => {
//   return NextResponse.json({
//     name: `Hello, from ${req.url} I'm now an Edge Function!`,
//   });
// };

export default async function handler(_: NextRequest, res: NextResponse) {

  const startDate = '2016-01-01'
  const endDate = '2022-12-31';

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
  console.log({ arrayOfBeachReadings });

  await prisma.beachReading.createMany({
    data: arrayOfBeachReadings,
    skipDuplicates: true,
  }).then(data => {
    NextResponse.json({ inserts: data, success: true, })

  }).catch(err => {
    console.error('Beach Reading Create Many Error', err);
    NextResponse.json({ success: false, error: true, message: err })
  })

}