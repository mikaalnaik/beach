import { BeachIds } from '../consts/beachIds';
import { ObjectId } from 'mongodb';
import { TWeatherPoint } from './environment-canada';
import { TBeachReading } from './toronto-city-response';
import { WaterKepperReading } from './waterkeeper-response';


export type MongoEntry = {
  _id: ObjectId;
  collectionDate: string;
  beachReadings: Record<BeachIds, TBeachReading | WaterKepperReading>;
  weather: TWeatherPoint;
};
