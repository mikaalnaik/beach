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
}[];
