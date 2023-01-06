
export interface RawBeach {
  beachId: number,
  beachName: string, // TODO: convert to enum
  eColi: number,
  advisory: BeachAdvisory;
  statusFlag: 'UNSAFE';
}

export type BeachAdvisory = string;

export interface Beach extends RawBeach {
  collectionDate: Date;
}
