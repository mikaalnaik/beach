import { getTorontoReadings } from 'data/toronto-beaches';
import { getMostRecentStartAndEndDate } from 'utils/helpers/get-start-end-dates';


export const getLatestTorontoReadings = async () => {
  const { startDate, endDate } = getMostRecentStartAndEndDate();
  console.log({ startDate, endDate });
  const beachReadings = await getTorontoReadings(startDate, endDate);
  return beachReadings;
};
