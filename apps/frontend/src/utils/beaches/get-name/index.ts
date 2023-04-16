// Use to parse the value from the Voiceflow assistant
const beachNamesToID = {
  'marie curtis': 1,
  'sunnyside': 2,
  'hanlans': 3,
  'gibraltar': 4,
  'centre': 5,
  'wards': 6,
  'cherry': 7,
  'woodbine': 8,
  'kew balmy': 9,
  'bluffer': 10,
}

export function beachNameToID(beachName: string) {
  return beachNamesToID[beachName];
}


// i want to make a fuzzy list of beach names to be able to search for id by partial name

const beachNames = {
  1: 'Marie Curtis', 
  2: 'Sunnyside',
  3: 'Hanlan\'s Point',
  4: 'Gibraltar Point',
  5: 'Centre Island',
  6: 'Ward\'s Island',
  7: 'Cherry',
  8: 'Woodbine',
  9: 'Kew-Balmy',
  10: 'Bluffer\'s Park',
  15: 'Ontario Place'
};


const beachKeywords = {
  1: 'marie',
  2: 'sunnyside',
  3: 'hanlans',
  4: 'gibraltar',
  5: 'centre',
  6: 'wards',
  7: 'cherry',
  8: 'woodbine',
  9: 'kew balmy',
  10: 'bluffer',
  15: 'ontario'
}


// Use to parse the value from the Voiceflow assistant

const beachIDsWithFuzzyNames = {
  1: ['marie curtis', 'marie curies', 'marie curtis park', 'marie curies park beach'],
  2: ['sunnyside', 'sunnyside beach', 'sunnyside park'],
  3: ['hanlans', 'hanlan\'s', 'hanlans point', 'hanlans point beach', 'hanlans point park'],
  4: ['gibraltar', 'gibraltar point', 'gibraltar point beach', 'gibraltar point park'],
  5: ['centre island', 'centre island beach', 'centre island park', 'center island', 'center', 'centre'],
  6: ['wards', 'wards island', 'wards island beach', 'wards island park', 'ward\'s'],
  7: ['cherry', 'cherry beach', 'cherry beach park'],
  8: ['woodbine', 'woodbine beach', 'woodbine beach park'],
  9: ['kew balmy', 'kew balmy beach', 'kew balmy beach park', 'kew balmy park'],
  10: ['bluffers', 'bluffers park', 'bluffers park beach', 'bluffers beach', 'bluffer\'s'],
  11: ['rouge', 'rouge beach', 'rouge beach park'],
  15: ['ontario place', 'ontario place beach', 'ontario place park']
}

export const beachIDToName = (id: number) => {
  return beachNames[id];
}



export const matchBeachName = (beachName: string) => {
  const fuzzyMatch = Object.keys(beachIDsWithFuzzyNames).find((beachID) => {
    return beachIDsWithFuzzyNames[beachID].includes(beachName);
  });
  return fuzzyMatch ? parseInt(fuzzyMatch) : null;
}


// export const matchBeachName = (potentialBeachName: string) => {
//   let beachID: null | number = null;
  
//   const potentialBeachNameLower = potentialBeachName.toLowerCase();
//   for (const [id, name] of Object.entries(beachKeywords)) {
//     console.log({name, potentialBeachNameLower});
//     if (name.toLowerCase().includes(potentialBeachNameLower)) {
//       beachID = Number(id);
//       return beachID;
//       break;
//     }
//   }
// }







