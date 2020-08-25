import Container from 'components/container';
import Header from 'components/header';
import Layout from 'components/layout';
import PostBody from 'components/post/post-body';
import PostHeader from 'components/post/post-header';
import PostTitle from 'components/post/post-title';
import { getArticle, getArticleSlugs } from 'lib/api';
import { BLOG_NAME } from 'lib/constants';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { InlineForm } from 'react-tinacms-inline';
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from 'tinacms';

export default function Post({ article, preview }) {
  const cms = useCMS();
  const formConfig = {
    id: article.id,
    label: 'Article',
    initialValues: article,
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
          process.env.NEXT_PUBLIC_API_URL,
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
                  {post.title} | {BLOG_NAME}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <InlineForm form={form}>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage.url}
                  date={post.published_at}
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
  const article = (await getArticle(params.slug)) || [];
  // const categories = (await getCategories()) || [];
  return {
    props: {
      article,
      // categories,
      preview: !!preview,
      ...(preview ? { ...previewData } : {}),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const slugs = (await getArticleSlugs()) || [];
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
