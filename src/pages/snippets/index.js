import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';

const Snippets = ({ snippets, loading, error }) => {
  return (
    <>
      <SEO
        title={'Snippets'}
        description={'Explore snippets'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage
          activeTab={1}
          snippets={snippets}
          loading={loading}
          error={error}
        />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const { data, loading, error } = await client.query({
    query: gql`
      query SnippetsPage {
        snippets(orderBy: publishedAt_DESC, first: 10) {
          id
          title
          slug
        }
      }
    `
  });

  return {
    props: {
      snippets: data?.snippets,
      loading,
      error: error ? error.message : null
    }
  };
}

export default Snippets;
