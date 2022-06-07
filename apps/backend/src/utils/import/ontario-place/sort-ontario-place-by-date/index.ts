
export default function sortOntarioPlaceDataByDate(data: any[]) {
  const test = data.sort((reading, prev) => {
    return reading.sample.collectionTime > prev.sample.collectionTime ? 1 : -1;
  }).reverse();
  return test;
}