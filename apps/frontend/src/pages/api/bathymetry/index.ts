

import dayjs from 'dayjs';
import { PrismaClient } from '@prisma/client'
import { fetchFromNOAA } from 'src/utils/weather/noaa';
import fetch from 'node-fetch';
const prisma = new PrismaClient()

export default async function handler(_, res) {
  const waterData = await getWaterLevelData()
  try {
    res.send(waterData)
    // await prisma.weather.createMany({
    //   data: noaaData,
    //   skipDuplicates: true,
    // }).then(data => {
    //   res.send(data)
    // }).catch(err => {
    //   console.log({ err });
    //   throw new Error(err)
    // })
  } catch (err) {
    res.send({ error: err, message: 'something went wrongt', })
  }
}

const getDate = () => {
  const rangeBackInTime = 20;
  const endDate = dayjs().format('YYYY-MM-DD')
  const startDate = dayjs().subtract(rangeBackInTime, 'day').format('YYYY-MM-DD')
  return {
    startDate,
    endDate,
  }
}

const getWaterLevelData = async () => {
  const REPORTING_STATION = '02HC024'
  const year = '2022'
  // Endpoint help https://wateroffice.ec.gc.ca/download/index_e.html?results_type=real_time
  const url = `https://wateroffice.ec.gc.ca/services/historical_graph/json/inline?station=${REPORTING_STATION}&data_type=daily&year=${year}&start_year=2022&end_year=2023&start_month=01&end_month=12&results_type=historical&parameter_type=level`

  const response = await fetch(url)
  const data = await response.json();

  return data?.provisional.map(entry => {
    const [unixDate, waterLevelData] = entry;
    const date = dayjs(unixDate).format('YYYY-MM-DD')
    const waterLevel = !Number.isNaN(Number(waterLevelData)) ? Number(waterLevelData) : null;

    return {
      date,
      waterLevel,
    };
  })
}
