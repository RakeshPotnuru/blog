import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import siteConfig from '../../../config/site.config';
import Navbar from '../../common/components/navbar/Navbar';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';

const Tags = ({ tags, loading, error }) => {
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.tags.title}
        description={siteConfig.seo.pages.tags.description}
        image={siteConfig.seo.pages.tags.image}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/tags`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/tags`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={3} tags={tags} loading={loading} error={error} />
        <Newsletter />
      </main>

      <Footer />
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
