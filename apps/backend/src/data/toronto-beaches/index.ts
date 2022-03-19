import { RawTorontoBeachDateResponse } from 'types/toronto-city-response';
import formatBackfill from '../../utils/backfill/toronto-beaches/backfill-toronto-beach';
import fetch from 'isomorphic-unfetch';

export const getTorontoReadings = async (startDate: string, endDate: string) => {
  const rawResponse = await fetch(
    `https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`
  );
  const response = await rawResponse.json() as RawTorontoBeachDateResponse[];
  if (response) {
    return formatBackfill(response);
  } else {
    return [];
  }
};
