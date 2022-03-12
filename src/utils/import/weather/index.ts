import { BeachIds } from 'consts/beachIds';
import { WeatherStations } from 'consts/weatherStations';
import dayjs from 'dayjs';
import { parseWeatherXML } from 'utils/backfill/weather';
import { getWeather } from 'utils/weather/get-weather';
import mongo from '../../../mongo';



export const importWeather = async () => {
  const month = dayjs().month() + 1;
  const year = dayjs().year();

  const rawWeather = await getWeather(year, WeatherStations.PostJune2013);
  const weather = await parseWeatherXML(rawWeather);

  console.log('weather', weather);
  const latestWeather = await getLatestWeather();
  return weather;

};


const getLatestWeather = async () => {

  const db = mongo.getDb();
  const latestWeather = await db.collection('records')
    .find({
      ['weather']: { // this could be any Toronto beach
        $exists: true,
      },
    })
    .sort({ collectionDate: -1 })
    .limit(1)
    .toArray();
  return latestWeather;
};
