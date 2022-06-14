import { bothReadingTypes, justOntarioPlaceReadings, notOntarioPlaceReadings } from 'fixtures/waterkeeper-response';
import { filterOntarioPlaceReadings } from './filter-ontario-place-readings';


describe('Filtering out just Ontario Place', () => {
  it('returns [] for an array of results that arent ontario place', () => {
    const got = filterOntarioPlaceReadings(notOntarioPlaceReadings);
    expect(got.length).toEqual(0);
  });

  it('returns 2 in an array of results that are just ontario place', () => {
    const got = filterOntarioPlaceReadings(justOntarioPlaceReadings);
    expect(got.length).toEqual(2);
  });

  it('returns 2 in an array of results that are just ontario place', () => {
    const got = filterOntarioPlaceReadings(bothReadingTypes);
    expect(got.length).toEqual(2);
  });
});
