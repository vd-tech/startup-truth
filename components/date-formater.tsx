import { parseISO, format } from 'date-fns';

export default function DateFormater({ dateString: dateTime, className = '' }) {
  const date = parseISO(dateTime);
  const invalid = isNaN(date.getDay());
  if (invalid) return null;
  return (
    <time {...{ dateTime, className }}>{format(date, 'LLLL	d, yyyy')}</time>
  );
}
