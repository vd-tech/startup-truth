import { CMS_NAME } from '../lib/constants';
import Container from 'components/container';
import Head from 'next/head';
import HeroPost from 'components/hero-post';
import Intro from 'components/intro';
import Layout from 'components/layout';
import MoreStories from 'components/more-stories';
import { fetchGraphql } from 'react-tinacms-strapi';

export default function Index({ allPosts, preview = false }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout {...{ preview }}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={
                process.env.NEXT_PUBLIC_STRAPI_URL + heroPost.coverImage.url
              }
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview, previewData }) {
  const postResults = await fetchGraphql(
    process.env.NEXT_PUBLIC_STRAPI_URL,
    `
    query{
      articles {
        title
        date
        slug
        author {
          name
          picture { 
            url
          }
        }
        excerpt
        coverImage {
          url
        }
      }
    }
  `
  );
  if (preview) {
    return {
      props: { allPosts: postResults.data.articles, preview, ...previewData },
    };
  }

  return {
    props: { allPosts: postResults.data.articles, preview: false },
  };
}
