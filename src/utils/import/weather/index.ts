import { WeatherStations } from '../../../consts/weatherStations';
import dayjs from 'dayjs';
import { getParsedWeather, insertWeatherIntoMongo } from '../../../utils/backfill/weather';
import { formatDailyDataPoint } from '../../../utils/weather/format-daily-data-point';
import { formatStationData } from '../../../utils/weather/format-station-data';
import { isValidWeatherDataPoint } from '../../../utils/weather/weather-data-validator';

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
