import { getArrayOfYearsSince2017 } from '.';

describe('Get Array of Years', () => {
  it('the last element is 2017 and the latest is the current year', () => {
    const got = getArrayOfYearsSince2017();
    const currentYear = new Date().getFullYear();
    expect(got[0].year).toBe(2007);
    expect(got[0].stationID).toBe(5097);
    expect(got[got.length - 1].year).toBe(currentYear);
    expect(got[got.length - 1].stationID).toBe(51459);
  });
});
