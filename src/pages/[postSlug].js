import { gql } from '@apollo/client';

import { Analytics, SEO, client } from '@/utils/index.js';
import {
  BreadcrumbSchemaMarkup,
  ArticleSchemaMarkup
} from '@/schemaMarkup/index.js';
import Navbar from '@/components/navbar/Navbar';
import PostPage from '@/post/PostPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const PostHome = ({ post, posts, error }) => {
  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`}
        canonical={
          post.canonicalUrl ||
          `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
        }
        image={post.featuredImage.url}
        altText={post.title}
        ogType={'article'}
      />
      <BreadcrumbSchemaMarkup
        items={[
          {
            position: 1,
            name: 'Home',
            item: process.env.NEXT_PUBLIC_SITE_URL
          },
          {
            position: 2,
            name: 'Articles',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/articles`
          },
          {
            position: 3,
            name: post.category.name,
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/articles?c=${post.category.slug}`
          },
          {
            position: 4,
            name: post.title,
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
          }
        ]}
      />
      <ArticleSchemaMarkup
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`}
        title={post.title}
        image={post.featuredImage.url}
        publishedAt={
          post.customPublicationDate
            ? post.customPublicationDate
            : post.publishedAt
        }
        updatedAt={post.updatedAt}
        author={post.author.name}
        description={post.description}
      />
      <Analytics />

      <Navbar />

      <main>
        <PostPage post={post} posts={posts} error={error} />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { postSlug } = params;

  const { data, error } = await client.query({
    query: gql`
      query PostPage($slug: String!) {
        post(where: { slug: $slug }, stage: PUBLISHED) {
          category {
            name
            slug
          }
          updatedAt
          featuredImage
          author {
            name
            photo
          }
          publishedAt
          slug
          sponsored
          audioId
          title
          canonicalUrl
          content
          description
          customPublicationDate
        }
        posts(
          first: 2
          orderBy: publishedAt_DESC
          where: { slug_not: $slug }
          stage: PUBLISHED
        ) {
          id
          slug
          sponsored
          title
          content
          tags
          customPublicationDate
          publishedAt
          excerpt
          featuredImage
        }
      }
    `,
    variables: {
      slug: postSlug
    }
  });

  return {
    props: {
      post: data?.post,
      posts: data?.posts,
      error: error ? error.message : null
    },
    revalidate: 300
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query PostSlugs {
        posts {
          slug
        }
      }
    `
  });

  const paths = data?.posts?.map((post) => {
    return {
      params: {
        postSlug: post.slug
      }
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
}

export default PostHome;
