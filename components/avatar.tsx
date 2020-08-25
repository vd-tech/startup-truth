export default function Avatar({
  picture,
  alt = 'user avatar',
  className = '',
}) {
  return (
    <img
      src={picture || 'avatar.svg'}
      className={`w-16 h-16 mr-2 rounded-full ${className}`}
      alt={alt}
    />
  );
}
