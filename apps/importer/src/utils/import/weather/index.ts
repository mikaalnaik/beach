import { WeatherStations } from '../../../consts/weatherStations';
import dayjs from 'dayjs';
import { getParsedWeather, insertWeatherIntoMongo } from '../../backfill/weather';
import { formatDailyDataPoint } from '../../weather/format-daily-data-point';
import { formatStationData } from '../../weather/format-station-data';
import { isValidWeatherDataPoint } from '../../weather/weather-data-validator';
import { getArrayOfYearsSince2017 } from 'utils/backfill/get-array-of-years';

export const importWeather = async () => {
  const readings = await getWeatherToInsert();
  readings.forEach(item => {
    insertWeatherIntoMongo(item);
  });
};


export const getWeatherToInsert = async () => {
  const year = dayjs().year();
  const weather = await getParsedWeather(year, WeatherStations.PostJune2013);
  const station = formatStationData(weather);
  const stationData = weather.climatedata.stationdata;

  return stationData.reduce((accum, reading) => {
    if (isValidWeatherDataPoint(reading)) {
      const formattedReading = formatDailyDataPoint(reading, station);
      accum.push(formattedReading);
    }
    return accum;
  }, []);
};


export const backfillWeather = async () => {
  const years = getArrayOfYearsSince2017();
  const inserts = years.map(async yearData => {
    const weather = await getParsedWeather(yearData.year, yearData.stationID);
    // return insertWeatherForYearAtStation(yearData.year, yearData.stationID);
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
