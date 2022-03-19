import { WaterKeeperReponsePoint, WaterKeeperResponse } from 'types/waterkeeper-response';


export const filterOntarioPlaceReadings = (readings: WaterKeeperResponse): WaterKeeperReponsePoint[] => {
  const justOntarioPlaceReadings = readings.records.filter(reading => reading.location.name === 'Ontario_Place');
  return justOntarioPlaceReadings;
};
