import { TRawWeatherResponse, TStation } from 'types/environment-canada';


export const formatStationData = (rawStation: TRawWeatherResponse): TStation => {
  const station = rawStation.climatedata.stationinformation[0];
  return {
    name: station.name[0],
    latitude: Number(station.latitude[0]),
    longitude: Number(station.longitude[0]),
    province: station.province[0],
    climate_identifier: station.climate_identifier[0],
  };
};
