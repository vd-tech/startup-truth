import Container from 'components/container';
import HeroPost from 'components/hero-post';
import Intro from 'components/intro';
import Layout from 'components/layout';
import { getArticles, getCategories } from 'lib/api';

export default function Index({ articles, preview = false }) {
  return (
    <>
      <Layout {...{ preview }}>
        <div className="max-w-xl mx-auto">
          <Container>
            <Intro />
            {articles.map((post) => (
              <HeroPost
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage.url}
                date={post.published_at}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview, previewData }) {
  const articles = (await getArticles()) || [];
  const categories = (await getCategories()) || [];
  return {
    props: {
      articles,
      categories,
      preview: !!preview,
      ...(preview ? { ...previewData } : {}),
    },
    revalidate: 1,
  };
}
