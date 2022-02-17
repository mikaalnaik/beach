

export const getArrayOfYearsSince2017 = () => {
  const years = [2017];
  while (years[years.length - 1] < new Date().getFullYear()) {
    years.push(years[years.length - 1] + 1);
  }
  return years;
};
