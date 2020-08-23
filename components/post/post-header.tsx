import Avatar from 'components/avatar';
import { InlineImage, InlineText } from 'react-tinacms-inline';
import { useCMS } from 'tinacms';
import PostAuthor from './post-author';
import PostTitle from './post-title';
import EditButton from 'components/edit-button';

export default function PostHeader({ title, coverImage, date, author }) {
  const cms = useCMS();
  return (
    <>
      <PostTitle>
        <InlineText name="title" />
      </PostTitle>
      <div className="hidden md:flex justify-between align-middle  md:mb-12">
        <PostAuthor
          name={author.name}
          picture={process.env.NEXT_PUBLIC_STRAPI_URL + author.picture.url}
          date={date}
        />

        <EditButton />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <InlineImage
          name="coverImage.url"
          previewSrc={(formValues) => {
            debugger;
            return `${process.env.NEXT_PUBLIC_STRAPI_URL}${formValues.coverImage.url}`;
          }}
          uploadDir={() => '/uploads'}
          parse={(filename) => {
            return `/uploads/${filename}`;
          }}
        >
          {() => <img src={coverImage} alt={`Cover Image for ${title}`} />}
        </InlineImage>{' '}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <PostAuthor
            name={author.name}
            picture={process.env.NEXT_PUBLIC_STRAPI_URL + author.picture.url}
            date={date}
          />
        </div>
      </div>
    </>
  );
}
