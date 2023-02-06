import dayjs from 'dayjs';
import fetch from 'node-fetch';
import { formatDate } from 'src/utils/weather/filter-future-dates';
const parseString = require('xml2js').parseString;

export default async function handler(_, res) {
  const stationID = 48549; // 31688; // 71508; // 71265;
  const weatherResponse = await getWeather(2023, 4, stationID);

  const parsedWeatherData = await parseWeatherXML(weatherResponse);

  const stationdata = parsedWeatherData.climatedata.stationdata;

  const data = stationdata.map(reading => {
    const dateObject = reading['$'];
    return {
      date: formatDate(dateObject),
      meanTemp: Number(reading.meantemp[0]._),
      minTemp: Number(reading.mintemp[0]._),
      maxTemp: Number(reading.maxtemp[0]._),
      totalRain: Number(reading.totalrain[0]._),
      speedOfMaxGust: Number(reading.speedofmaxgust[0]._),
      dirOfMaxGust: reading.dirofmaxgust[0].$['units'],
      totalPrecipitation: Number(reading.totalprecipitation[0]._),
    };
  }).filter(data => {
    // only return readings previous to today
    return !dayjs().subtract(1, 'day').isBefore(data.date);
  })

  res.send(data);
}

export const getWeather = async (
  year: number,
  month: number,
  stationID: number
) => {
  const url = `http://climate.weather.gc.ca/climate_data/bulk_data_e.html?format=xml&stationID=${stationID}&Year=${year}&Month=${month}&timeframe=2&submit= Download+Data`;
  const weatherResponse = await fetch(url);
  return await weatherResponse.text();
};

//https://climate.weather.gc.ca/climate_data/daily_data_e.html?hlyRange=2002-06-04%7C2023-01-30&dlyRange=2002-06-04%7C2023-01-30&mlyRange=2003-07-01%7C2006-12-01&StationID=31688&Prov=ON&urlExtension=_e.html&searchType=stnName&optLimit=yearRange&StartYear=1840&EndYear=2023&selRowPerPage=25&Line=26&searchMethod=contains&txtStationName=toronto&timeframe=2&Day=30&Year=2019&Month=3

export const parseWeatherXML = (weather: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    parseString(weather, (err, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
