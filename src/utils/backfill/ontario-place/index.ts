import fetch from 'isomorphic-unfetch';
import { WaterKeeperReponsePoint, WaterKeeperResponse } from 'types/waterkeeper-response';
import { ProviderId } from '../../../consts/providerIds';
import { BeachNames, BeachPositions } from '../../../consts/beachIds';
import { filterOntarioPlaceReadings } from './filter-ontario-place-readings';

export const getOntarioPlaceReading = async () => {
  const swimGuideData: WaterKeeperResponse = await fetch('http://translate.theswimguide.org/toronto/json').then(res => res.json());
  const ontarioPlaceReadings = filterOntarioPlaceReadings(swimGuideData);
  return ontarioPlaceReadings.map(formatOntarioPlaceReading);
};

export const formatOntarioPlaceReading = (reading: WaterKeeperReponsePoint) => {
  const id = reading.location.id;
  return {
    ...reading,
    beachId: id,
    beachName: BeachNames[id],
    collectionDate: new Date(reading.sample.collectionTime),
    providerId: ProviderId['WaterKeeper'],
    provider: 'Lake Ontario WaterKeeper',
    position: BeachPositions[id],
  };

};
