import dayjs from 'dayjs';



export const getMostRecentStartAndEndDate = () :{ startDate: string; endDate: string} => {
  return {
    startDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  };
};
