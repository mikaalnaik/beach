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
  beachName: keyof BeachIds; // TODO: improve this type
  collectionDate: string;
  eColi: number | null;
  position: { latidude: number; longitude: number };
  provider: 'City of Toronto';
  providerId: 1;
  statusFlag: string;
};


export type TFormattedBeachReadings = {
  collectionDate: string;
  beachReadings: TBeachReadingsOnDay;
};


export type TBeachReadingsOnDay = Record<BeachIds, TBeachReading>;
