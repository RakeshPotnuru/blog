import { gql } from '@apollo/client';

import { Newsletter } from '../../common/components/misc';
import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import SearchPage from '../../components/search/SearchPage';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const Articles = ({ posts, error }) => {
  return (
    <>
      <SEO
        title={'Articles | itsrakesh - blog'}
        description={
          'Read articles on web development, web3, blockchain, design, and more.'
        }
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={0} posts={posts} error={error} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query ArticlesPage {
        posts(orderBy: publishedAt_DESC, first: 12) {
          featuredImage {
            url
          }
          id
          customPublicationDate
          excerpt
          publishedAt
          slug
          sponsored
          tags
          title
          content
        }
      }
    `
  });

  return {
    props: {
      posts: data?.posts,
      error: error ? error.message : null
    }
  };
}

export default Articles;
