import { gql } from '@apollo/client/core';

const GET_ARTICLES = gql`
  query GetArticles($searchQuery: String!) {
    posts(where: { _search: $searchQuery }, first: 12, stage: PUBLISHED) {
      customPublicationDate
      excerpt
      featuredImage
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
      featuredImage
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
      featuredImage
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
    snippets(where: { _search: $searchQuery }, first: 12, stage: PUBLISHED) {
      slug
      title
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories($searchQuery: String!) {
    categories(where: { _search: $searchQuery }, stage: PUBLISHED) {
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
