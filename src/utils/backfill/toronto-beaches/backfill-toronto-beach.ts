import dayjs from 'dayjs';
import { BeachPositions } from '../../../consts/beachIds';
import { ProviderId } from '../../../consts/providerIds';
import {
  RawTorontoBeachDateResponse,
  RawTorontoBeachResponsePoint,
  TFormattedBeachReadings,
} from '../../../types/toronto-city-response';

type formattedBackfillResponse = {
  _id: string;
  beachReadings: Record<string, FormattedBeachReading>;
}[];

type FormattedBeachReading = {
  provider: string;
  providerId: ProviderId;
  beachId: number;
  beachName: string;
  eColi: number | null;
  advisory: string;
  statusFlag: string;
};


export default function formatBackfill(d: RawTorontoBeachDateResponse[]) {
  const test = d.reduce((accum: TFormattedBeachReadings[], day) => {
    if (day.data) {
      return [
        ...accum,
        {
          collectionDate: dayjs(day.CollectionDate).format('YYYY-MM-DD'),
          beachReadings: formatReadingsForDay(day.data, day.CollectionDate),
        },
      ];
    } else {
      return accum;
    }
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
  const formattedReadings = readings.reduce((accum, r) => {
    return {
      ...accum,
      [r.beachId]: addAdditionalDataToTorontoResponse(r, date),
    };
  }, {});

  return formattedReadings;
};
