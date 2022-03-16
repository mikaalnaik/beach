import { weatherFixture } from '../../../../__fixtures__/weather/weather-response';
import { formatStationData } from '.';
import { TRawWeatherResponse } from 'types/environment-canada';

describe('Format Weather Stations', () => {
  it('produces the correct date format', () => {
    const station = formatStationData(weatherFixture as unknown as TRawWeatherResponse);
    const want = {
      climate_identifier: '6158731',
      latitude: 43.68,
      longitude: -79.63,
      name: 'TORONTO INTL A',
      province: 'ONTARIO',
    };
    expect(station).toEqual(want);
  });
});
