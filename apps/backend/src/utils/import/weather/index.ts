import { WeatherStations } from '../../../consts/weatherStations';
import dayjs from 'dayjs';
import { getParsedWeather, insertWeatherIntoMongo } from '../../backfill/weather';
import { formatDailyDataPoint } from '../../weather/format-daily-data-point';
import { formatStationData } from '../../weather/format-station-data';
import { isValidWeatherDataPoint } from '../../weather/weather-data-validator';

export const importWeather = async () => {
  const year = dayjs().year();
  const weather = await getParsedWeather(year, WeatherStations.PostJune2013);
  const station = formatStationData(weather);
  const stationData = weather.climatedata.stationdata;

  return stationData.map(async reading => {
    if (isValidWeatherDataPoint(reading)) {
      const formattedReading = formatDailyDataPoint(reading, station);
      return await insertWeatherIntoMongo(formattedReading, formattedReading.date);
    }
  });
};
