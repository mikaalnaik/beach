import fetch from 'node-fetch';

export const fetchFromNOAA = async (
  startDate: string,
  endDate: string,
  stationID: string
) => {
  // ENDPOINT HELP https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation
  const url = `https://www.ncei.noaa.gov/access/services/data/v1?dataset=daily-summaries&stations=${stationID}&startDate=${startDate}&endDate=${endDate}&includeAttributes=true&format=json&units=metric`
  const weatherResponse = await fetch(url);
  return await weatherResponse.json();
};
