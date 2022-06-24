import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const Snippets = ({ snippets, error }) => {
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
        <SearchPage activeTab={1} snippets={snippets} error={error} />
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
      error: error ? error.message : null
    }
  };
}

export default Snippets;
