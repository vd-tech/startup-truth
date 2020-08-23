import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { InlineForm } from 'react-tinacms-inline';
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from 'tinacms';
import Container from 'components/container';
import Header from 'components/header';
import Layout from 'components/layout';
import PostBody from 'components/post/post-body';
import PostHeader from 'components/post/post-header';
import PostTitle from 'components/post/post-title';
import { CMS_NAME } from 'lib/constants';

export default function Post({ post: initialPost, morePosts, preview }) {
  const cms = useCMS();
  const formConfig = {
    id: initialPost.id,
    label: 'Article',
    initialValues: initialPost,
    onSubmit: async (values) => {
      const saveMutation = `
      mutation UpdateArticle(
        $id: ID!
        $title: String
        $content: String
        $coverImageId: ID
      ) {
        updateArticle(
          input: {
            where: { id: $id }
            data: { title: $title, content: $content, coverImage: $coverImageId}
          }
        ) {
          article {
            id
          }
        }
      }`;
      try {
        const response = await fetchGraphql(
          process.env.NEXT_PUBLIC_STRAPI_URL,
          saveMutation,
          {
            id: values.id,
            title: values.title,
            content: values.content,
            // @ts-ignore
            coverImageId: cms.media.store.getFileId(values.coverImage.url),
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        alert('ran into an error');
      }
    },
    fields: [],
  };
  const [post, form] = useForm(formConfig);
  usePlugin(form);

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={
                    process.env.NEXT_PUBLIC_STRAPI_URL + post.coverImage.url
                  }
                />
              </Head>
              <InlineForm form={form}>
                <PostHeader
                  title={post.title}
                  coverImage={
                    process.env.NEXT_PUBLIC_STRAPI_URL + post.coverImage.url
                  }
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </InlineForm>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview, previewData }) {
  const postResults = await fetchGraphql(
    process.env.NEXT_PUBLIC_STRAPI_URL,
    `
    query{
      articles(where: {slug: "${params.slug}"}){
        id
        title
        date
        slug
        content
        author {
          name
          picture { 
            url
          }
        }
        coverImage {
          url
        }
      }
    }
  `
  );
  const post = postResults.data.articles[0];

  if (preview) {
    return {
      props: {
        post: {
          ...post,
        },
        preview,
        ...previewData,
      },
    };
  }
  return {
    props: {
      post: {
        ...post,
      },
      preview: false,
    },
  };
}

export async function getStaticPaths() {
  const postResults = await fetchGraphql(
    process.env.NEXT_PUBLIC_STRAPI_URL,
    `
    query{
      articles{
        slug
      }
    }
  `
  );

  return {
    paths: postResults.data.articles.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
