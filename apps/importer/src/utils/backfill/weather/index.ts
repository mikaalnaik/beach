import { formatDailyDataPoint } from '../../weather/format-daily-data-point';
import { formatStationData } from '../../weather/format-station-data';
import mongo from '../../../mongo';
import dayjs from 'dayjs';
import { getArrayOfYearsSince2017 } from '../get-array-of-years';

import type { TRawWeatherResponse, TWeatherPoint } from 'types/environment-canada';
import { getWeather } from '../../weather/get-weather';
import { WeatherStations } from '../../../consts/weatherStations';
import { isValidWeatherDataPoint } from '../../weather/weather-data-validator';

const parseString = require('xml2js').parseString;

export const backfillWeather = async () => {
  const years = getArrayOfYearsSince2017();
  const inserts = years.map(async yearData => {
    return insertWeatherForYearAtStation(yearData.year, yearData.stationID);
  });
  const results = await Promise.all(inserts);
  return results;
};


const insertWeatherForYearAtStation = async (year: number, stationID: WeatherStations) => {
  const weather = await getParsedWeather(year, stationID);
  const station = formatStationData(weather);
  const stationData = weather.climatedata.stationdata;
  return stationData.map(async reading => {
    if (isValidWeatherDataPoint(reading)) {
      const formattedReading = formatDailyDataPoint(reading, station);
      return await insertWeatherIntoMongo(formattedReading);
    }
  });
};



export const getParsedWeather = async (year: number, stationID: WeatherStations) => {
  const xmlWeather = await getWeather(year, stationID);
  const weather = await parseWeatherXML(xmlWeather);
  return weather;
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

export const insertWeatherIntoMongo = async (weather: TWeatherPoint) => {
  const db = mongo.getDb();

  const filter = { collectionDate: dayjs(weather.date).format('YYYY-MM-DD').toString() };
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
