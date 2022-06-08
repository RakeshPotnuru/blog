import { gql } from '@apollo/client';

import { Analytics, SEO } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import PostPage from '../components/post/PostPage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';
import CopyrightNotice from '../common/components/footer/CopyrightNotice';
import { client } from '../common/util';

const PostHome = ({ post, posts, error }) => {
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`}
        canonical={
          post.canonicalUrl ||
          `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
        }
        image={post.featuredImage.url}
        ogType={'article'}
      />
      <Analytics />

      <Navbar />

      <main>
        <PostPage post={post} posts={posts} error={error} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { postSlug } = params;

  const { data } = await client.query({
    query: gql`
      query PostPage($slug: String) {
        post(where: { slug: $slug }, stage: PUBLISHED) {
          category {
            name
            slug
          }
          updatedAt
          featuredImage {
            url
          }
          author {
            name
            photo {
              url
            }
          }
          publishedAt
          slug
          sponsored
          audioId
          title
          canonicalUrl
          content
          excerpt
          customPublicationDate
        }
      }
    `,
    variables: {
      slug: postSlug
    }
  });

  const morePosts = await client.query({
    query: gql`
      query MorePosts($slug: String) {
        posts(first: 2, where: { slug_not: $slug }, stage: PUBLISHED) {
          id
          slug
          sponsored
          title
          tags
          publishedAt
          excerpt
          featuredImage {
            url
          }
        }
      }
    `,
    variables: {
      slug: postSlug
    }
  });

  return {
    props: {
      post: data.post,
      posts: morePosts.data.posts
    }
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

  const paths = data.posts.map((post) => {
    return {
      params: {
        postSlug: post.slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default PostHome;
