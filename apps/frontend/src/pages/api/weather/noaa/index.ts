import dayjs from 'dayjs';
import { PrismaClient } from '@prisma/client'
import { fetchFromNOAA } from 'src/utils/weather/noaa';
const prisma = new PrismaClient()

export default async function handler(_, res) {
  const noaaData = await getNOAAData()
  try {
    await prisma.weather.createMany({
      data: noaaData,
      skipDuplicates: true,
    }).then(data => {
      res.send(data)
    }).catch(err => {
      console.log({ err });
      throw new Error(err)
    })
  } catch (err) {
    res.send({ error: err, message: 'something went wrongt', })
  }
}

const getDate = () => {
  const rangeBackInTime = 1;
  const endDate = dayjs().format('YYYY-MM-DD')
  const startDate = dayjs().subtract(rangeBackInTime, 'day').format('YYYY-MM-DD')
  return {
    startDate,
    endDate,
  }
}

const getNOAAData = async () => {
  const NOAA_TORONTO_STATION_ID = 'CA006158355'
  const { startDate, endDate } = getDate()
  const weatherResponse = await fetchFromNOAA(startDate, endDate, NOAA_TORONTO_STATION_ID);

  return weatherResponse.map(entry => {
    const { DATE, TMAX, TMIN, TAVG, PRCP } = entry;
    console.log({
      DATE
    });
    return {
      precipitation: ~~PRCP,
      meanTemp: ~~TAVG,
      minTemp: ~~TMIN,
      maxTemp: ~~TMAX,
      date: dayjs(DATE).toDate(),
    }
  })
}
