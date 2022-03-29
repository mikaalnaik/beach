export const beachData = {
  1: {
    name: 'Marie Curtis Park East Beach',
    displayName: 'Marie Curtis',
    routeName: 'marie-curtis',
    coordinates: {
      latitude: 43.585563,
      longitude: -79.540732,
    },
  },
  2: {
    name: 'Sunnyside Beach',
    routeName: 'sunnyside',
    displayName: 'Sunnyside',
    coordinates: {
      latitude: 43.637432,
      longitude: -79.455954,
    },
  },
  3: {
    name: "Hanlan's Point Beach",
    displayName: 'Hanlan\'s Point',
    routeName: 'hanlans-point',
    coordinates: {
      latitude: 43.619325,
      longitude: -79.393254,
    },
  },
  4: {
    name: 'Gibraltar Point Beach',
    displayName: 'Gibraltar Point',
    routeName: 'gibraltar-point',
    coordinates: {
      latitude: 43.612487,
      longitude: -79.382173,
    },
  },
  5: {
    name: 'Centre Island Beach',
    displayName: 'Centre Island',
    routeName: 'centre-island',
    coordinates: {
      latitude: 43.616072,
      longitude: -79.373826,
    },
  },
  6: {
    name: "Ward's Island Beach",
    displayName: 'Ward\'s Island',
    routeName: 'wards-island',
    coordinates: {
      latitude: 43.630088,
      longitude: -79.352318,
    },
  },
  7: {
    name: 'Cherry Beach',
    displayName: 'Cherry',
    routeName: 'cherry',
    coordinates: {
      latitude: 43.636742,
      longitude: -79.344117,
    },
  },
  8: {
    name: 'Woodbine Beaches',
    displayName: 'Woodbine',
    routeName: 'woodbine',
    coordinates: {
      latitude: 43.66381,
      longitude: -79.305057,
    },
  },
  9: {
    name: 'Kew Balmy Beach',
    displayName: 'Kew Balmy',
    routeName: 'kew-balmy',
    coordinates: {
      latitude: 43.668559,
      longitude: -79.290057,
    },
  },
  10: {
    name: "Bluffer's Beach Park",
    displayName: 'Bluffer\'s',
    routeName: 'bluffers',
    coordinates: {
      latitude: 43.71363,
      longitude: -79.225948,
    },
  },
  11: {
    name: 'Rouge Beach',
    displayName: 'Rouge',
    routeName: 'rouge',
    coordinates: {
      latitude: 43.793217,
      longitude: -79.118217,
    },
  },
  15: {
    name: 'Ontario Place West Beach',
    displayName: 'Ontario Place',
    routeName: 'ontario-place',
    coordinates: {
      latitude: 43.6272,
      longitude: -79.42052,
    },
  },
};
export function beachPositions(beachID) {
  return beachData[beachID];
}

export const getBeachConstants = (beachID: number) => {
  return beachData[beachID];
};
