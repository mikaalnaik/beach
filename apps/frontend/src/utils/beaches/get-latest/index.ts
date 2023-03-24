/*
 @example response {lastUpdate: "2022-09-06 10:02:04"}
*/

import dayjs from "dayjs";

export const getLastTorontoBeachUpdate = async () => {
  // Endpoint Help https://www.ubcenvision.com/blog/2017/11/30/jupyter-part1.html
  try {
    const rawResponse = await fetch(
      `https://secure.toronto.ca/opendata/adv/last_update/v1?format=json`
    );
    const response = await rawResponse.json()
    const last_update = response.lastUpdate;
    const formattedDate = dayjs(last_update.split(' ')[0]).subtract(1, 'day').format('YYYY-MM-DD')
    return formattedDate;
  } catch (err) {
    throw new Error(err)
  }
};

