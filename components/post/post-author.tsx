import Date from 'components/date-formater';

export default function PostAuthor({ name, picture, date }) {
  return (
    <div className="flex items-center">
      {picture && (
        <img
          src={picture}
          className="w-1h-16 h-16 mr-2 rounded-full"
          alt={name}
        />
      )}
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
