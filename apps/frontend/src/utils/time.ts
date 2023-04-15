import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function daysAgo(stringTime) {
  return dayjs(stringTime).fromNow();
}
