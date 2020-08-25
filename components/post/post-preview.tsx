import Avatar from 'components/avatar';
import CoverImage from 'components/cover-image';
import DateFormater from 'components/date-formater';
import Link from 'next/link';
import PostAuthor from './post-author';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <PostAuthor name={author.name} date={date} picture={author.picture.url} />
    </div>
  );
}
