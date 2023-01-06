import { WaterKepperReading } from 'types/waterkeeper-response';

export const getLatestOntarioPlaceReading = async (readings: WaterKepperReading[]) => {
  let test;
  try {
    test = readings.sort((reading, prev) => {
      return new Date(reading.collectionDate) > new Date(prev.sample.collectionTime) ? 1 : -1;
    }).reverse()[0];
  } catch (err) {
    console.log('err', err);
  }
  console.log('test', test);
  return test;
};