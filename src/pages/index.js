import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import HomePage from '../components/home/HomePage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';

const Home = ({ featuredPost, posts, snippets, categories, error }) => {
  return (
    <>
      <SEO />
      <Analytics />

      <Navbar />

      <main>
        <HomePage
          featuredPost={featuredPost}
          posts={posts}
          snippets={snippets}
          categories={categories}
          error={error}
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query HomePage {
        posts(orderBy: publishedAt_DESC, first: 3) {
          featuredImage
          customPublicationDate
          excerpt
          publishedAt
          slug
          sponsored
          tags
          title
          content
        }
        snippets(orderBy: publishedAt_DESC, first: 4) {
          id
          title
          slug
        }
        categories(first: 4) {
          id
          name
          slug
        }
      }
    `
  });

  const featuredPost = await client.query({
    query: gql`
      query FeaturedPost {
        posts(first: 1, where: { featuredPost: true }) {
          slug
          title
          featuredImage
        }
      }
    `
  });

  return {
    props: {
      posts: data?.posts,
      snippets: data?.snippets,
      categories: data?.categories,
      featuredPost: featuredPost?.data?.posts[0],
      error: error ? error.message : null
    }
  };
}

export default Home;
