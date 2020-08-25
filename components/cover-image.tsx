import cn from 'classnames';
import Link from 'next/link';

export default function CoverImage({
  title,
  src,
  slug,
  align = 'left' as 'left' | 'center' | 'right',
  fit = 'contain' as 'contain' | 'cover',
  className = '',
}) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'ml-auto': align === 'right',
        'mr-auto': align === 'left',
        'mx-auto': align === 'center',
        'object-cover h-full w-full': fit === 'cover',
        'object-contain': fit === 'contain',
      })}
    />
  );

  if (slug) {
    return (
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title} className={className}>
          {image}
        </a>
      </Link>
    );
  }
  return <div className={className}>{image}</div>;
}
