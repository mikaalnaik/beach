import { TRawStation, TStation } from 'types/environment-canada';


export const formatStationData = (rawStation: TRawStation): TStation => {
  return {
    name: rawStation.name[0],
    latitude: Number(rawStation.latitude[0]),
    longitude: Number(rawStation.longitude[0]),
    province: rawStation.province[0],
    climate_identifier: rawStation.climate_identifier[0],
  };
};
