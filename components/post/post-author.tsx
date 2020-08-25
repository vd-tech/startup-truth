import Date from 'components/date-formater';
import Avatar from 'components/avatar';

export default function PostAuthor({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <Avatar {...{ picture, alt: name }} />
      {(name || date) && (
        <div>
          {name && (
            <h6 className="font-black group-hover:text-primary">{name}</h6>
          )}
          {date && <Date dateString={date} className="text-gray-dove-700" />}
        </div>
      )}
    </div>
  );
}
