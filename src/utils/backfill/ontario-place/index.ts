import fetch from 'isomorphic-unfetch';
import { WaterKeeperResponse } from 'types/waterkeeper-response';
import { filterOntarioPlaceReadings } from './filter-ontario-place-readings';
import { formatOntarioPlaceReading } from './format-response';

export const getOntarioPlaceReading = async () => {
  const swimGuideData: WaterKeeperResponse = await fetch('http://translate.theswimguide.org/toronto/json').then(res => res.json());
  const ontarioPlaceReadings = filterOntarioPlaceReadings(swimGuideData);
  return ontarioPlaceReadings.map(formatOntarioPlaceReading);
};
