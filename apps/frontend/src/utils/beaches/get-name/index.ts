

// Use to parse the value from the Voiceflow assistant

const beachIDsWithFuzzyNames = {
  1: ['marie curtis', 'marie curies', 'marie curtis park', 'marie curies park beach'],
  2: ['sunnyside', 'sunnyside beach', 'sunnyside park'],
  3: ['hanlans', 'hanlan\'s', 'hanlans point', 'hanlans point beach', 'hanlans point park'],
  4: ['gibraltar', 'gibraltar point', 'gibraltar point beach', 'gibraltar point park'],
  5: ['centre island', 'centre island beach', 'centre island park', 'center island', 'center', 'centre'],
  6: ['wards', 'wards island', 'wards island beach', 'wards island park', 'ward\'s', 'ward\'s island'],
  7: ['cherry', 'cherry beach', 'cherry beach park'],
  8: ['woodbine', 'woodbine beach', 'woodbine beach park'],
  9: ['kew balmy', 'kew balmy beach', 'kew balmy beach park', 'kew balmy park'],
  10: ['bluffers', 'bluffers park', 'bluffers park beach', 'bluffers beach', 'bluffer\'s'],
  11: ['rouge', 'rouge beach', 'rouge beach park'],
  15: ['ontario place', 'ontario place beach', 'ontario place park']
}


export const fuzzyMatchBeachNameToID = (beachName: string) => {
  const fuzzyMatch = Object.keys(beachIDsWithFuzzyNames).find((beachID) => {
    return beachIDsWithFuzzyNames[beachID].includes(beachName.toLowerCase());
  });
  return fuzzyMatch ? parseInt(fuzzyMatch) : null;
}








