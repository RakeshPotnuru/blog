import { gql } from '@apollo/client';

import { Analytics, SEO, client } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import PostPage from '../components/post/PostPage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';
import CopyrightNotice from '../common/components/footer/CopyrightNotice';

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

  const paths = data?.posts?.map((post) => {
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
