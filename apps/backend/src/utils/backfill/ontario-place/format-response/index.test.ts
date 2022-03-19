import { formatOntarioPlaceReading } from '.';
import { justOntarioPlaceReadings } from 'fixtures/waterkeeper-response';
import { Temporal } from '@js-temporal/polyfill';

describe('Format Ontario Place response point', () => {
  it('formats a response properly', () => {
    const got = formatOntarioPlaceReading(justOntarioPlaceReadings.records[0]);

    const want = {
      advisory: { issued: false },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-12-10T15:24:00-05:00',
      guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
      ecoli: 410.6,
      substance: 'total_coliform',
      sample: {
        result: 410.6,
        collectionTime: '2021-12-09T13:45:00-05:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6274,
            longitude: -79.42097,
          },
          name: 'Ontario_Place',
          id: '15C',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Isabel',
      },
      beachId: '15',
      beachName: 'Ontario Place West Beach',
      collectionDate: Temporal.PlainDate.from('2021-12-09T13:45:00-05:00').toString(),
      providerId: 2,
      provider: 'Lake Ontario WaterKeeper',
      position: { latitude: 43.6275, longitude: -79.42141 },
    };

    expect(got).toEqual(want);
  });
});
