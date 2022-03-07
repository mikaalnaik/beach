
export const getWeather = async (year: number, stationID: 5097 | 51459) => {
  const weatherResponse = await fetch(`https://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=${stationID}&Year=${year}&time=&timeframe=2`);
  return await weatherResponse.text();
};
