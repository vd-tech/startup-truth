import { parseISO, format } from 'date-fns';

export default function DateFormater({ dateString: dateTime, className = '' }) {
  const date = parseISO(dateTime);
  return (
    <time {...{ dateTime, className }}>{format(date, 'LLLL	d, yyyy')}</time>
  );
}
