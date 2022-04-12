import { WeatherStations } from '../../consts/weatherStations';

/**
 *
 * @param year
 * @param stationID enum of WeatherStations
 *
 *
 * @example const weatherXML = await getWeather(2019, 5097);
 * @returns XML string of weather data
 */

export const getWeather = async (year: number, stationID: WeatherStations) => {
  const weatherResponse = await fetch(`https://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=${stationID}&Year=${year}&time=&timeframe=2`);
  return await weatherResponse.text();
};
