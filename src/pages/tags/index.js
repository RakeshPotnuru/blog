import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const Tags = ({ tags, loading, error }) => {
  return (
    <>
      <SEO
        title={'Tags'}
        description={'Explore tags'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/tags`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={3} tags={tags} loading={loading} error={error} />
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
      query TagsPage {
        __type(name: "Tag") {
          enumValues {
            name
          }
        }
      }
    `
  });

  return {
    props: {
      tags: data?.__type?.enumValues,
      error: error ? error.message : null
    }
  };
}

export default Tags;
