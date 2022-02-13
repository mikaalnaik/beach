export type WaterKeeperReponsePoint = {
  advisory: {
    issued: boolean;
  };
  organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)';
  references?: [
    {
      guid: string;
    }
  ];
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
    };
    collector: string;
  };
};


export type WaterKeeperResponse = {
  records: WaterKeeperReponsePoint[];
};
