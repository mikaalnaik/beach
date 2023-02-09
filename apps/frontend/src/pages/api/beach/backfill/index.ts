import dayjs from 'dayjs';
import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(_, res) {

  const startDate = '2016-01-01'
  const endDate = '2022-12-31';

  const results = await getTorontoReadings(startDate, endDate);

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
    res.send({ inserts: data, success: true, })

  }).catch(err => {
    console.error('Beach Reading Create Many Error', err);
    res.send({ success: false, error: true, message: err })
  })

}

export const getTorontoReadings = async (startDate: string, endDate: string) => {
  // Endpoint Help https://www.ubcenvision.com/blog/2017/11/30/jupyter-part1.html
  try {
    const rawResponse = await fetch(
      `https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`
    );
    const response = await rawResponse.json()
    return response;
  } catch (err) {
    throw new Error(err)
  }
};
