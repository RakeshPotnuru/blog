import { gql } from '@apollo/client/core';

const GET_ARTICLES = gql`
  query GetArticles($searchQuery: String!) {
    posts(
      where: {
        title_contains: $searchQuery
        OR: { excerpt_contains: $searchQuery }
      }
      first: 12
      stage: PUBLISHED
    ) {
      customPublicationDate
      excerpt
      featuredImage {
        url
      }
      publishedAt
      slug
      sponsored
      tags
      title
      content
    }
  }
`;

const GET_ARTICLES_MATCHING_CATEGORY = gql`
  query ArticlesMatchingCategory($searchQuery: String!) {
    posts(where: { category: { slug: $searchQuery } }, stage: PUBLISHED) {
      customPublicationDate
      excerpt
      featuredImage {
        url
      }
      publishedAt
      slug
      sponsored
      tags
      title
      content
    }
  }
`;

const GET_ARTICLES_MATCHING_TAG = gql`
  query ArticlesMatchingTag($searchQuery: Tag!) {
    posts(where: { tags_contains_some: [$searchQuery] }, stage: PUBLISHED) {
      customPublicationDate
      excerpt
      featuredImage {
        url
      }
      publishedAt
      slug
      sponsored
      tags
      title
      content
    }
  }
`;

const GET_SNIPPETS = gql`
  query GetSnippets($searchQuery: String!) {
    snippets(
      where: {
        title_contains: $searchQuery
        OR: { content_contains: $searchQuery }
      }
      first: 12
      stage: PUBLISHED
    ) {
      slug
      title
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories($searchQuery: String!) {
    categories(where: { name_contains: $searchQuery }, stage: PUBLISHED) {
      name
      slug
    }
  }
`;

export const queries = {
  GET_ARTICLES,
  GET_ARTICLES_MATCHING_CATEGORY,
  GET_ARTICLES_MATCHING_TAG,
  GET_SNIPPETS,
  GET_CATEGORIES
};
