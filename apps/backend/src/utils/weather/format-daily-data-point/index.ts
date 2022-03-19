import { TRawWeatherDataPoint, TStation, TWeatherPoint } from 'types/environment-canada';
import dayjs from 'dayjs';


export const formatDailyDataPoint = (reading: TRawWeatherDataPoint, station: TStation): TWeatherPoint => {
  return {
    date: dayjs(`${reading.$.year}-${reading.$.month}-${reading.$.day}`, 'YYYY-MM-DD').toString(),
    station: station,
    meanTemp: Number(reading.meantemp[0]._),
    minTemp: Number(reading.mintemp[0]._),
    maxTemp: Number(reading.maxtemp[0]._),
    totalRain: Number(reading.totalrain[0]._),
    speedOfMaxGust: Number(reading.speedofmaxgust[0]._),
    dirOfMaxGust: reading.dirofmaxgust[0].$['units'],
    totalPrecipitation: Number(reading.totalprecipitation[0]._),
  };
};
