import { fetchGraphql } from 'react-tinacms-strapi';

async function fetchAPI(query, { variables = undefined } = {}) {
  const res = await fetchGraphql(
    process.env.NEXT_PUBLIC_API_URL,
    query,
    variables
  );

  if (res.errors) {
    console.error(res.errors);
    throw new Error('Failed to fetch API');
  }
  return res.data;
}

const articlesData = `
title
published_at
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
`;

export async function getArticles() {
  const data = await fetchAPI(`query Articles {
    articles(sort: "published_at:desc") {
     ${articlesData}
    }
  }`);
  return data.articles;
}

export async function getArticleSlugs() {
  const data = await fetchAPI(
    `query Articles {
      articles {
       slug
      }
    }`
  );
  return (data.articles || [])
    .map((article) => article?.slug)
    .filter((slug) => slug);
}

export async function getArticle(slug) {
  const data = await fetchAPI(
    `query Articles($slug: String!) {
      articles(where: { slug: $slug }, sort: "published_at:desc") {
        id
        ${articlesData}
        content
      }
    }`,
    { variables: { slug } }
  );
  return data.articles[0];
}

export async function getCategories() {
  const data = await fetchAPI(`query Categories {
    categories {
      id
      name
    }
  }`);
  return data.categories;
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        title
        content
        slug
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
      }
    }
  }
`,
    { variables: { id } }
  );
  return data.category;
}
