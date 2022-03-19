import { TRawWeatherDataPoint } from 'types/environment-canada';


export const isValidWeatherDataPoint = (reading: TRawWeatherDataPoint): boolean => {
  if (!reading.meantemp[0]._ && !reading.mintemp[0]._ && !reading.maxtemp[0]._ && !reading.totalprecipitation[0]._ && !reading.totalrain[0]._ && !reading.totalsnow[0]._ && !reading.snowonground[0]._ && !reading.cooldegdays[0]._ && !reading.heatdegdays[0]._ && !reading.speedofmaxgust[0]._ && !reading.dirofmaxgust[0]._) {
    return false;
  } else {
    return true;
  }
};
