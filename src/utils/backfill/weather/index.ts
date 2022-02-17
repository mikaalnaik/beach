import fetch from 'isomorphic-unfetch';
import { TRawStation, TRawWeatherResponse, TWeatherPoint } from 'types/environment-canada';
import { formatDailyDataPoint } from './format-daily-data-point';
import { formatStationData } from './format-station-data';
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { getArrayOfYearsSince2017 } from '../get-array-of-years';

const parseString = require('xml2js').parseString;

export const backfillWeather = async () => {
  const years = getArrayOfYearsSince2017();
  const inserts = years.map(async year => {
    const weather = await getWeather(year);
    const result = await parseWeatherXML(weather);
    const rawStationData: TRawStation = result.climatedata.stationinformation[0];
    const station = formatStationData(rawStationData);
    return result.climatedata.stationdata.map(async reading => {
      const formattedReading = formatDailyDataPoint(reading, station);
      return await insertWeatherIntoMongo(formattedReading, formattedReading.date);
    });
  });
  const results = await Promise.all(inserts);
  return results;
};

const parseWeatherXML = (weather: string): Promise<TRawWeatherResponse> => {
  return new Promise((resolve, reject) => {
    parseString(weather, (err, result: TRawWeatherResponse) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const insertWeatherIntoMongo = async (weather: TWeatherPoint, date: string) => {
  const db = mongo.getDb();

  const filter = { collectionDate: dayjs(date).format('YYYY-MM-DD').toString() };
  const options = { upsert: true };

  const updateDoc = {
    $set: {
      weather,
    },
  };

  const result = await db.collection('records')
    .updateOne(filter, updateDoc, options)
    .then(result => result)
    .catch(console.error);
  return result;
};

const getWeather = async (year: number) => {
  const weatherResponse = await fetch(`https://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=51459&Year=${year}&time=&timeframe=2`);
  return await weatherResponse.text();
};
