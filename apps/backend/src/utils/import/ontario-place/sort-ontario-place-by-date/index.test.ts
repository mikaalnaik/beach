import { bothReadingTypes } from 'fixtures/waterkeeper-response';
import sortOntarioPlaceDataByDate from './index';


describe('Sorting Water Keeper response by date', () => {
  it('should sort the data by date', () => {
    sortOntarioPlaceDataByDate(bothReadingTypes.records as any);
  });
});