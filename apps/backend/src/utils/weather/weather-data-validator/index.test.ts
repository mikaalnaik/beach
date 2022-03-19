import { isValidWeatherDataPoint } from './index';
import { invalidWeatherDataFromFuture, missingMaxTemp, missingMinMeanAndMaxTemp } from 'fixtures/weather/weather-response-points';


describe('Weather Data Validator', () => {
  it('returns false for a data without any valid data', () => {
    const got = isValidWeatherDataPoint(invalidWeatherDataFromFuture);
    const want = false;
    expect(want).toEqual(got);
  });

  it('returns true when just max temp is missing', () => {
    const got = isValidWeatherDataPoint(missingMaxTemp);
    const want = true;
    expect(want).toEqual(got);
  });

  it('returns true when min, max, and mean temps are missing', () => {
    const got = isValidWeatherDataPoint(missingMinMeanAndMaxTemp);
    const want = true;
    expect(want).toEqual(got);
  });
});
