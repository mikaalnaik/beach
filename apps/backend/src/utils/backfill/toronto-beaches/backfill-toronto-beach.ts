import dayjs from 'dayjs';
import { BeachPositions } from '../../../consts/beachIds';
import { ProviderId } from '../../../consts/providerIds';
import {
  RawTorontoBeachDateResponse,
  RawTorontoBeachResponsePoint,
  TBeachReadingsOnDay,
  TFormattedBeachReadings,
} from '../../../types/toronto-city-response';

export default function formatBackfill(d: RawTorontoBeachDateResponse[]): TFormattedBeachReadings[] {
  const test = d.reduce((accum: TFormattedBeachReadings[], day) => {
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
  data: RawTorontoBeachResponsePoint,
  date: string
) => {
  return {
    ...data,
    collectionDate: date,
    position: BeachPositions[data.beachId],
    provider: 'City of Toronto',
    providerId: ProviderId['CityOfToronto'],
  };
};

const formatReadingsForDay = (
  readings: RawTorontoBeachResponsePoint[],
  date: string
) => {
  const formattedReadings = readings.reduce<TBeachReadingsOnDay>((accum, r) => {
    return {
      ...accum,
      [r.beachId]: addAdditionalDataToTorontoResponse(r, date),
    };
  }, {} as TBeachReadingsOnDay);

  return formattedReadings;
};
