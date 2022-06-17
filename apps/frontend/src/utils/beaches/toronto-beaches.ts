import fetch from 'isomorphic-unfetch';
import dayjs from 'dayjs';
import { beachPositions } from 'src/utils/beachPositions';

export const getLastReportingDateFromToronto = async () => {
  const { lastUpdate } = await fetch('https://secure.toronto.ca/opendata/adv/last_update/v1?format=json').then(res => res.json());
  return dayjs(lastUpdate).subtract(1, 'day').format('YYYY-MM-DD');
};


export default function formatBackfill(d) {
  const test = d.reduce((accum, day) => {
    if (day.data) {
      accum = [
        ...accum,
        {
          collectionDate: dayjs(day.CollectionDate).format('YYYY-MM-DD'),
          beachReadings: formatReadingsForDay(day.data, day.CollectionDate),
        },
      ];
    } else {
      return accum;
    }
    return accum;
  }, []);
  return test;
}

const addAdditionalDataToTorontoResponse = (
  data: any,
  date: string
) => {
  return {
    ...data,
    collectionDate: date,
    position: beachPositions(data.beachId),
    provider: 'City of Toronto',
    providerId: 1,
  };
};

const formatReadingsForDay = (
  readings: any[],
  date: string
) => {
  const formattedReadings = readings.reduce((accum, r) => {
    return {
      ...accum,
      [r.beachId]: addAdditionalDataToTorontoResponse(r, date),
    };
  }, {} );

  return formattedReadings;
};
