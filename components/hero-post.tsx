import Link from 'next/link';
import CoverImage from './cover-image';
import PostAuthor from './post/post-author';
import DateFormater from './date-formater';

const titleColors = [
  'text-purple-600',
  'text-pink-600',
  'text-red-600',
  'text-orange-600',
  'text-green-600',
  'text-teal-600',
  'text-blue-600',
  'text-indigo-600',
];

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  excerpt,
  slug,
}) {
  const titleColor =
    titleColors[Math.floor(Math.random() * titleColors.length)];

  return (
    <section>
      <div className="mb-20 md:mb-28">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          align="center"
          fit="cover"
        />
        <div>
          <h3
            className={`text-2xl font-black lg:text-5xl leading-tight mb-0 ${titleColor}`}
          >
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <small>
            <DateFormater dateString={date} /> {`• `} <span>{author.name}</span>
          </small>
          <p className="leading-relaxed my-4 ">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
