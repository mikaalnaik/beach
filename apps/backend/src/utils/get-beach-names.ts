import { BeachNames } from '../consts/beachIds';

export const getBeachName = (id: keyof typeof BeachNames) => {
  const beachName = BeachNames[id];
  if (!beachName) {
    throw new Error(`Beach name for id ${id} not found`);
  } else {
    return beachName;
  }
};
