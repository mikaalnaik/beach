export const getTorontoReadings = async (startDate: string, endDate: string) => {
  // Endpoint Help https://www.ubcenvision.com/blog/2017/11/30/jupyter-part1.html
  try {
    const rawResponse = await fetch(
      `https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`
    );
    const response = await rawResponse.json()
    return response;
  } catch (err) {
    throw new Error(err)
  }
};