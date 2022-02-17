import { Temporal } from '@js-temporal/polyfill';
import { BeachIds } from 'consts/beachIds';

export type RawTorontoBeachResponsePoint = {
  beachId: number;
  beachName: string;
  eColi: number | null;
  advisory: string;
  statusFlag: string | 'Safe';
};

export type RawTorontoBeachDateResponse = {
  CollectionDate: string;
  data: RawTorontoBeachResponsePoint[];
};

export type TBeachReading = {
  advisory: string;
  beachId: BeachIds;
  beachName: string; // TODO: improve this type
  collectionDate: Temporal.PlainDate;
  eColi: number | null;
  position: { latidude: number; longitude: number };
  provider: 'City of Toronto';
  providerId: 1;
  statusFlag: string;
};
