import { formatDailyDataPoint } from 'utils/backfill/weather/format-daily-data-point';
import { formatStationData } from 'utils/backfill/weather/format-station-data';
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { getArrayOfYearsSince2017 } from 'utils/backfill/get-array-of-years';

import type { TRawStation, TRawWeatherResponse, TWeatherPoint } from 'types/environment-canada';
import { getWeather } from './get-weather';

const parseString = require('xml2js').parseString;

export const backfillWeather = async () => {
  const years = getArrayOfYearsSince2017();
  const inserts = years.map(async yearData => {
    const weather = await getWeather(yearData.year, yearData.stationID);
    const result = await parseWeatherXML(weather);
    console.log('yearData', yearData);
    console.log('result', result);
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

export const parseWeatherXML = (weather: string): Promise<TRawWeatherResponse> => {
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
