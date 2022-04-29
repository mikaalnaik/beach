import { WeatherStations } from 'consts/weatherStations';
import { weatherFixture } from 'fixtures/weather/weather-response';
import { getWeatherToInsert } from './index';


jest.mock('../../backfill/weather', () => {
  return {
    getParsedWeather: jest.fn(() => {
      return Promise.resolve(weatherFixture);
    }),
    insertWeatherIntoMongo: jest.fn(() => {
      return Promise.resolve('folks');
    }),
  };
});

describe('Weather Importer', () => {
  it('works as expected', async () => {


    const got = await getWeatherToInsert(2022, WeatherStations.PostJune2013);

    // This is kind of arbitrary. When I took the snapshot to the beginning of the year.
    expect(got.length).toEqual(70);

    expect(got[0]).toEqual({
      date: 'Sat, 01 Jan 2022 05:00:00 GMT',
      dirOfMaxGust: '10s Deg',
      maxTemp: 4.5,
      meanTemp: 0.7,
      minTemp: -3.2,
      speedOfMaxGust: 46,
      station:  {
        climate_identifier: '6158731',
        latitude: 43.68,
        longitude: -79.63,
        name: 'TORONTO INTL A',
        province: 'ONTARIO',
      },
      totalPrecipitation: 2.4,
      totalRain: 0.2,
    });
  });
});
