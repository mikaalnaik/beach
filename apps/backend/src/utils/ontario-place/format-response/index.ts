import { BeachNames, BeachPositions } from '../../../consts/beachIds';
import { ProviderId } from '../../../consts/providerIds';
import { WaterKeeperReponsePoint, WaterKepperReading } from '../../../types/waterkeeper-response';

export const formatOntarioPlaceReading = (reading: WaterKeeperReponsePoint): WaterKepperReading => {
  const id = Number(reading.location.id);
  delete reading.location;
  const result = {
    ...reading,
    eColi: Number(reading.sample.result),
    substance: reading.sample.substance,
    beachId: id,
    beachName: BeachNames[id],
    collectionDate: reading.sample.collectionTime.split('T')[0],
    displayName: 'Ontario Place',
    providerId: ProviderId['WaterKeeper'],
    provider: 'Lake Ontario WaterKeeper',
    position: BeachPositions[id],
  };
  return result;
};
