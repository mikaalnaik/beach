import { WaterKeeperResponse } from 'types/waterkeeper-response';

export const waterkeeperResponseFixture = [
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    publicationTime: '2021-08-25T14:15:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-6A-17-TC',
    location: {
      coordinate: {
        latitude: 43.6388,
        longitude: -79.384895,
      },
      name: 'Marina_4',
      id: '6',
    },
    sample: {
      result: 1011.2,
      collectionTime: '2021-08-24T10:37:00-04:00',
      method: '9223B_colilert',
      substance: 'total_coliform',
      location: {
        coordinate: {
          latitude: 43.6388,
          longitude: -79.384895,
        },
        name: 'Marina_4',
        id: '6A',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Cal, Josh, Tania',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    publicationTime: '2021-06-16T15:50:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-14B-01-TC',
    location: {
      coordinate: {
        latitude: 43.63571,
        longitude: -79.39633,
      },
      name: 'Bathurst_Quay',
      id: '14',
    },
    sample: {
      result: 2419.6,
      collectionTime: '2021-06-15T10:41:00-04:00',
      method: '9223B_colilert',
      substance: 'total_coliform',
      location: {
        coordinate: {
          latitude: 43.63571,
          longitude: -79.39633,
        },
        name: 'Bathurst_Quay',
        id: '14B',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'isabel, georgia',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    references: [
      {
        guid: 'ca.swimdrinkfish/ID21-15A-28-EC',
      },
    ],
    publicationTime: '2021-10-08T12:46:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-15A-28-EC',
    location: {
      coordinate: {
        latitude: 43.6275,
        longitude: -79.42141,
      },
      name: 'Ontario_Place',
      id: '15',
    },
    sample: {
      result: 5.21,
      collectionTime: '2021-10-07T08:26:00-04:00',
      method: '9223B_colilert',
      substance: 'ecoli',
      location: {
        coordinate: {
          latitude: 43.6275,
          longitude: -79.42141,
        },
        name: 'Ontario_Place',
        id: '15A',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Kezia',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    publicationTime: '2021-08-18T14:57:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-SA-03-EC',
    location: {
      coordinate: {
        latitude: 43.62479,
        longitude: -79.36503,
      },
      name: 'Snake_Island',
      id: 'S',
    },
    sample: {
      result: 5.12,
      collectionTime: '2021-08-17T08:29:00-04:00',
      method: '9223B_colilert',
      substance: 'ecoli',
      location: {
        coordinate: {
          latitude: 43.62479,
          longitude: -79.36503,
        },
        name: 'Snake_Island',
        id: 'SA',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Leida, Julian',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    references: [
      {
        guid: 'ca.swimdrinkfish/ID21-6F-17-EC',
      },
    ],
    publicationTime: '2021-08-25T14:15:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-6F-17-EC',
    location: {
      coordinate: {
        latitude: 43.638935,
        longitude: -79.38426,
      },
      name: 'Marina_4',
      id: '6',
    },
    sample: {
      result: 9.7,
      collectionTime: '2021-08-24T10:23:00-04:00',
      method: '9223B_colilert',
      substance: 'ecoli',
      location: {
        coordinate: {
          latitude: 43.638935,
          longitude: -79.38426,
        },
        name: 'Marina_4',
        id: '6F',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Cal, Josh, Tania',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    publicationTime: '2021-12-10T15:24:00-05:00',
    guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
    location: {
      coordinate: {
        latitude: 43.6274,
        longitude: -79.42097,
      },
      name: 'Ontario_Place',
      id: '15',
    },
    sample: {
      result: 410.6,
      collectionTime: '2021-12-09T13:45:00-05:00',
      method: '9223B_colilert',
      substance: 'total_coliform',
      location: {
        coordinate: {
          latitude: 43.6274,
          longitude: -79.42097,
        },
        name: 'Ontario_Place',
        id: '15C',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Isabel',
    },
  },
  {
    advisory: {
      issued: false,
    },
    organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
    references: [
      {
        guid: 'ca.swimdrinkfish/ID21-6A-29-EC',
      },
    ],
    publicationTime: '2021-10-15T13:03:00-04:00',
    guid: 'ca.swimdrinkfish/ID21-6A-29-EC',
    location: {
      coordinate: {
        latitude: 43.6388,
        longitude: -79.384895,
      },
      name: 'Marina_4',
      id: '6',
    },
    sample: {
      result: 328.2,
      collectionTime: '2021-10-14T10:29:00-04:00',
      method: '9223B_colilert',
      substance: 'ecoli',
      location: {
        coordinate: {
          latitude: 43.6388,
          longitude: -79.384895,
        },
        name: 'Marina_4',
        id: '6A',
      },
      units: 'mpn',
      type: {
        kind: 'single',
      },
      collector: 'Tim, Cal',
    },
  },
];


export const notOntarioPlaceReadings: WaterKeeperResponse = {
  records: [
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-08-25T14:15:00-04:00',
      guid: 'ca.swimdrinkfish/ID21-6A-17-TC',
      location: {
        coordinate: {
          latitude: 43.6388,
          longitude: -79.384895,
        },
        name: 'Marina_4',
        id: '6',
      },
      sample: {
        result: 1011.2,
        collectionTime: '2021-08-24T10:37:00-04:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6388,
            longitude: -79.384895,
          },
          name: 'Marina_4',
          id: '6A',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Cal, Josh, Tania',
      },
    },
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-06-16T15:50:00-04:00',
      guid: 'ca.swimdrinkfish/ID21-14B-01-TC',
      location: {
        coordinate: {
          latitude: 43.63571,
          longitude: -79.39633,
        },
        name: 'Bathurst_Quay',
        id: '14',
      },
      sample: {
        result: 2419.6,
        collectionTime: '2021-06-15T10:41:00-04:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.63571,
            longitude: -79.39633,
          },
          name: 'Bathurst_Quay',
          id: '14B',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'isabel, georgia',
      },
    },
  ],
};


export const justOntarioPlaceReadings: WaterKeeperResponse = {
  records: [
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-12-10T15:24:00-05:00',
      guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
      location: {
        coordinate: {
          latitude: 43.6274,
          longitude: -79.42097,
        },
        name: 'Ontario_Place',
        id: '15',
      },
      sample: {
        result: 410.6,
        collectionTime: '2021-12-09T13:45:00-05:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6274,
            longitude: -79.42097,
          },
          name: 'Ontario_Place',
          id: '15C',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Isabel',
      },
    },
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-12-10T15:24:00-05:00',
      guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
      location: {
        coordinate: {
          latitude: 43.6274,
          longitude: -79.42097,
        },
        name: 'Ontario_Place',
        id: '15',
      },
      sample: {
        result: 410.6,
        collectionTime: '2021-12-09T13:45:00-05:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6274,
            longitude: -79.42097,
          },
          name: 'Ontario_Place',
          id: '15C',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Isabel',
      },
    },
  ],
};
export const bothReadingTypes: WaterKeeperResponse = {
  records: [
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-12-10T15:24:00-05:00',
      guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
      location: {
        coordinate: {
          latitude: 43.6274,
          longitude: -79.42097,
        },
        name: 'Ontario_Place',
        id: '15',
      },
      sample: {
        result: 410.6,
        collectionTime: '2021-12-09T13:45:00-05:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6274,
            longitude: -79.42097,
          },
          name: 'Ontario_Place',
          id: '15C',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Isabel',
      },
    },
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-12-10T15:24:00-05:00',
      guid: 'ca.swimdrinkfish/ID21-15C-32-TC',
      location: {
        coordinate: {
          latitude: 43.6274,
          longitude: -79.42097,
        },
        name: 'Ontario_Place',
        id: '15',
      },
      sample: {
        result: 410.6,
        collectionTime: '2021-12-09T13:45:00-05:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6274,
            longitude: -79.42097,
          },
          name: 'Ontario_Place',
          id: '15C',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Isabel',
      },
    },
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-08-25T14:15:00-04:00',
      guid: 'ca.swimdrinkfish/ID21-6A-17-TC',
      location: {
        coordinate: {
          latitude: 43.6388,
          longitude: -79.384895,
        },
        name: 'Marina_4',
        id: '6',
      },
      sample: {
        result: 1011.2,
        collectionTime: '2021-08-24T10:37:00-04:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.6388,
            longitude: -79.384895,
          },
          name: 'Marina_4',
          id: '6A',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'Cal, Josh, Tania',
      },
    },
    {
      advisory: {
        issued: false,
      },
      organizationName: 'Lake Ontario Waterkeeper (http://www.waterkeeper.ca)',
      publicationTime: '2021-06-16T15:50:00-04:00',
      guid: 'ca.swimdrinkfish/ID21-14B-01-TC',
      location: {
        coordinate: {
          latitude: 43.63571,
          longitude: -79.39633,
        },
        name: 'Bathurst_Quay',
        id: '14',
      },
      sample: {
        result: 2419.6,
        collectionTime: '2021-06-15T10:41:00-04:00',
        method: '9223B_colilert',
        substance: 'total_coliform',
        location: {
          coordinate: {
            latitude: 43.63571,
            longitude: -79.39633,
          },
          name: 'Bathurst_Quay',
          id: '14B',
        },
        units: 'mpn',
        type: {
          kind: 'single',
        },
        collector: 'isabel, georgia',
      },
    },
  ],
};
