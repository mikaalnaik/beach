
export default function beachRouteMatch(beachID: string): number {
  const beachNamesHash = {
    'marie-curtis': 1,
    sunnyside: 2,
    'hanlans-point': 3,
    gibraltar: 4,
    'centre-island': 5,
    'wards-island': 6,
    cherry: 7,
    woodbine: 8,
    'kew-balmy': 9,
    bluffers: 10,
    rouge: 11,
    'ontario-place': 15,
  };
  return beachNamesHash[beachID];
}

export function beachIDToRouteName(id) {
  const beachNamesHash = {
    1: 'marie-curtis',
    2: 'sunnyside',
    3: 'hanlans-point',
    4: 'gibraltar',
    5: 'center-island',
    6: 'wards-island',
    7: 'cherry',
    8: 'woodbine',
    9: 'kew-balmy',
    10: 'bluffers',
    11: 'rouge',
    15: 'ontario-place',
  };
  return beachNamesHash[id];
}
