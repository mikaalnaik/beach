import { waterKeeper2021Resposne } from 'fixtures/water-keeper-2021';
import { formatOntarioPlaceReading } from '../../../../ontario-place/format-response';
import { filterOntarioPlaceReadings } from '../../../../../utils/ontario-place/filter-ontario-place-readings';
import { filterOutOntarioPlaceReadingsByDate } from '../index';

describe('Filter Out Ontario Place Readings by Date', () => {
  it('only collects readings after the specififed date', () => {
    const ontarioPlaceReadings = filterOntarioPlaceReadings(waterKeeper2021Resposne);
    const formattedOntarioPlaceReadings = ontarioPlaceReadings.map(formatOntarioPlaceReading);
    const targetDate = '2021-08-10';
    const got = filterOutOntarioPlaceReadingsByDate(formattedOntarioPlaceReadings, targetDate);
    const areDatesAfterTheTarget = got.every(test => {
      return test.collectionDate > targetDate;
    });
    expect(areDatesAfterTheTarget).toBeTruthy();
  });
});
