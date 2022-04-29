import dayjs from 'dayjs';
import { WaterKepperReading } from 'types/waterkeeper-response';

export const filterOutOntarioPlaceReadingsByDate = (
  readings: WaterKepperReading[],
  date: string,
): WaterKepperReading[] => {
  const latestReadingDate = dayjs(date);
  return readings.filter(reading => {
    const collectionDate = dayjs(reading.collectionDate);
    if (latestReadingDate.isBefore(collectionDate)) {
      return true;
    }
  });
};
