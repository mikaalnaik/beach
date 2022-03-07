

type TYearRange = {
  year: number;
  stationID: 5097 | 51459;
};

export const getArrayOfYearsSince2017 = (): TYearRange[] => {
  const years: TYearRange[] = [{ year:2007, stationID: 5097 }];
  while (years[years.length - 1].year < new Date().getFullYear()) {
    const newYear = years[years.length - 1].year + 1;
    if (newYear === 2013) {
      years.push({ year: newYear, stationID: 51459 });
      years.push({ year: newYear, stationID: 5097 });
    } else {
      if (newYear > 2013) {
        years.push({
          year: newYear,
          stationID: 51459,
        });
      } else {
        years.push({ year: newYear, stationID: 5097 });
      }
    }
  }
  console.log('years', years);
  return years;
};
