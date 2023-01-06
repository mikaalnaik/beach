import { waterKeeperResponse } from 'fixtures/waterkeeper-raw-response';
import { filterOntarioPlaceReadings } from '../../ontario-place/filter-ontario-place-readings';
import { formatOntarioPlaceReading } from '../../ontario-place/format-response';

describe('Get Latest Ontario Place Reading', () => {

  jest.mock('isomorphic-unfetch', () => {
    console.log('howdy');
    return {
      howdy: 'doody',
    };
  });

  it('should return the latest reading', async () => {
    const ontarioPlaceReadings = filterOntarioPlaceReadings(waterKeeperResponse as any);
    // const got = ontarioPlaceReadings.map(formatOntarioPlaceReading);
    console.log('got', ontarioPlaceReadings);

  });
});