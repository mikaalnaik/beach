import { ProviderId } from 'consts/providerIds';

export type WaterKeeperReponsePoint = {
  advisory: {
    issued: boolean;
  };
  organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)';
  references?: {
      guid: string;
  }[];
  publicationTime: string;
  guid: string;
  location: {
    coordinate: {
      latitude: number;
      longitude: number;
    };
    name: string;
    id: string;
  };
  sample: {
    result: number;
    collectionTime: string;
    method: string;
    substance: 'ecoli' | string;
    location: {
      coordinate: {
        latitude: number;
        longitude: number;
      };
      name: string;
      id: string;
    };
    units: 'mpn';
    type: {
      kind: string;
      variant?: string;
    };
    collector: string;
  };
  revokes?: {
    guid: string;
  };
};


export type WaterKeeperResponse = {
  $schema?: string;
  records: WaterKeeperReponsePoint[];
  documentTime?: string;
};

export type WaterKepperReading = {
  advisory: { issued: boolean };
  organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)';
  publicationTime: string;
  guid: string;
  eColi: number;
  substance: string;
  sample: {
    result: number;
    collectionTime: string;
    method: string;
    substance: string;
    location: {
      coordinate: {
        latitude: number;
        longitude: number;
      };
      name: string;
      id: string;
    };
    units: 'mpn';
    type: {
      kind: string;
    };
    collector: string;
  };
  beachId: number;
  beachName: 'Ontario Place West Beach';
  collectionDate: string;
  providerId: ProviderId;
  provider: string;
  position: { latitude: number; longitude: number };
};
