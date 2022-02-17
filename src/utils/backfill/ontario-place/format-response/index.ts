import { Temporal } from '@js-temporal/polyfill';
import { BeachNames, BeachPositions } from '../../../../consts/beachIds';
import { ProviderId } from '../../../../consts/providerIds';
import { WaterKeeperReponsePoint } from '../../../../types/waterkeeper-response';

export const formatOntarioPlaceReading = (reading: WaterKeeperReponsePoint) => {
  const id = reading.location.id;

  delete reading.location;
  const result = {
    ...reading,
    ecoli: reading.sample.result,
    substance: reading.sample.substance,
    beachId: id,
    beachName: BeachNames[id],
    collectionDate: Temporal.PlainDate.from(reading.sample.collectionTime).toString(),
    providerId: ProviderId['WaterKeeper'],
    provider: 'Lake Ontario WaterKeeper',
    position: BeachPositions[id],
  };
  return result;
};
