import { TRawStation } from 'types/environment-canada';
import { weatherFixture } from '../../../../__fixtures__/weather-response';
import { formatStationData } from '.';

describe('Format Weather Stations', () => {
  it('produces the correct date format', () => {
    const rawStationData: TRawStation = weatherFixture.climatedata.stationinformation[0];
    const station = formatStationData(rawStationData);
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
