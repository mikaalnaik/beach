import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

export const formatDate = (dateObject) => {
  const { day, month, year } = dateObject;
  const concatenatedDate = `${day}-${month}-${year}`
  const formattedDate = dayjs(concatenatedDate, 'D-M-YYYY');
  return formattedDate
};