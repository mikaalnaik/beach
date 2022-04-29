import { cityOfTorontoResponse } from 'fixtures/city-of-toronto-response';
import formatBackfill from '../backfill-toronto-beach';

describe('Toronto Backfilling', () => {
  it('returns the expected object', () => {
    const got = formatBackfill([cityOfTorontoResponse, cityOfTorontoResponse]);

    const firstResult = got[0].beachReadings[1];

    expect(firstResult).toEqual({
      advisory: 'E. coli levels exceed the provincially established safety level of 100.  Swim at your own risk.',
      beachId: 1,
      beachName: 'Marie Curtis Park East Beach',
      collectionDate: '2010-06-06',
      eColi: 526,
      position: { latidude: 43.585563, longitude: -79.540732 },
      provider: 'City of Toronto',
      providerId: 1,
      statusFlag: 'UNSAFE',
    });
  });
});
