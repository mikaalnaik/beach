import { WeatherStations } from '../../../consts/weatherStations';
import dayjs from 'dayjs';
import { getParsedWeather, insertWeatherIntoMongo } from '../../backfill/weather';
import { formatDailyDataPoint } from '../../weather/format-daily-data-point';
import { formatStationData } from '../../weather/format-station-data';
import { isValidWeatherDataPoint } from '../../weather/weather-data-validator';
import { getArrayOfYearsSince2017 } from '../../../utils/backfill/get-array-of-years';
// import { getArrayOfYearsSince2017 } from 'utils/backfill/get-array-of-years';

export const importWeather = async () => {
  const year = dayjs().year();
  const station = WeatherStations.PostJune2013;
  const readings = await getWeatherToInsert(year, station);
  readings.forEach(item => {
    insertWeatherIntoMongo(item);
  });
};

export const getWeatherToInsert = async (year: number, stationForYear: WeatherStations) => {
  const weather = await getParsedWeather(year, stationForYear);
  const station = formatStationData(weather);
  const data = weather.climatedata.stationdata;

  return data.reduce((accum, reading) => {
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
    const readings = await getWeatherToInsert(yearData.year, yearData.stationID);
    return readings.map(item => {
      insertWeatherIntoMongo(item);
    });
  });
  const results = await Promise.all(inserts);
  return results;
};
