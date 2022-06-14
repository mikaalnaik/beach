import { waterKeeperResponse } from 'fixtures/waterkeeper-raw-response';
import { filterOntarioPlaceReadings } from '../../ontario-place/filter-ontario-place-readings';
import { formatOntarioPlaceReading } from '../../ontario-place/format-response';

describe('Get Latest Ontario Place Reading', () => {

  it('should return the latest reading', async () => {
    const ontarioPlaceReadings = filterOntarioPlaceReadings(waterKeeperResponse as any);
    const got = ontarioPlaceReadings.map(formatOntarioPlaceReading);
    got.forEach(item => {
      console.log('item', item.sample.collectionTime);
    });
    
    
  });
});