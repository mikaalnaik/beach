import dayjs from 'dayjs';
import fetch from 'node-fetch';
import { PrismaClient } from '@prisma/client'
// import { fetchFromNOAA } from 'src/utils/weather/noaa';
import { formatDate } from 'src/utils/weather/filter-future-dates';
const parseString = require('xml2js').parseString;
const prisma = new PrismaClient()

export default async function handler(_, res) {
  // const noaaData = await getNOAAData()

  const envCanadaData = await getEnvironmentCanadaData()

  // res.send({ envCanadaData })
  try {
    await prisma.weather.createMany({
      data: envCanadaData,
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



// const getDate = () => {
//   const rangeBackInTime = 1;
//   const endDate = dayjs().format('YYYY-MM-DD')
//   const startDate = dayjs().subtract(rangeBackInTime, 'day').format('YYYY-MM-DD')
//   return {
//     startDate,
//     endDate,
//   }
// }

// const getNOAAData = async () => {
//   const NOAA_TORONTO_STATION_ID = 'CA006158355'
//   const { startDate, endDate } = getDate()
//   const weatherResponse = await fetchFromNOAA(startDate, endDate, NOAA_TORONTO_STATION_ID);

//   return weatherResponse.map(entry => {
//     const { DATE, TMAX, TMIN, TAVG, PRCP } = entry;
//     console.log({
//       DATE
//     });
//     return {
//       precipitation: ~~PRCP,
//       meanTemp: ~~TAVG,
//       minTemp: ~~TMIN,
//       maxTemp: ~~TMAX,
//       date: dayjs(DATE).toDate(),
//     }
//   })
// }

export const parseWeatherXML = (weather: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    parseString(weather, (err, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


const formatEnvironmentCanadaData = (response: any) => {
  return parseWeatherXML(response);
}

const getEnvironmentCanadaData = async () => {
  const stationID = 48549; // These are other stations nearby // 31688; // 71508; // 71265;
  const year = 2007 // dayjs().year();
  const weatherResponse = await fetch(`http://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=${stationID}&Year=${year}&timeframe=2&submit= Download+Data"`)
  const rawWeather = await weatherResponse.text()
  const yearlyData = await formatEnvironmentCanadaData(rawWeather);
  const stationdata = yearlyData.climatedata.stationdata;

  const data = stationdata.map(reading => {
    const dateObject = reading['$'];
    return {
      date: formatDate(dateObject).toDate(),
      meanTemp: ~~reading.meantemp[0]._,
      minTemp: ~~reading.mintemp[0]._,
      maxTemp: ~~reading.maxtemp[0]._,
      speedOfMaxGust: ~~reading.speedofmaxgust[0]._,
      precipitation: ~~reading.totalprecipitation[0]._,
    };
  }).filter(data => {
    // filter results for dates in the future, including today, which wont have a summary yet.
    return !dayjs().subtract(1, 'day').isBefore(dayjs(data.date));
  })
  return data
}