const TORONTO_ISLAND_WEATHER_STATION_ID = 71265;



export const getWeatherForDates = async () => {


  const stationID = TORONTO_ISLAND_WEATHER_STATION_ID;
  const year = 2018;
  try {

    const weatherResponse = await fetch(`https://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=${stationID}&Year=${year}&time=&timeframe=2`);
    const text = await weatherResponse.text();
    console.log({ text });
  } catch (err) {
    console.log('err', err);
  }





};