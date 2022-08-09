import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '@/utils/index.js';
import { BreadcrumbSchemaMarkup } from '@/schemaMarkup/index.js';
import siteConfig from '../../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import SearchPage from '@/search/SearchPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const Snippets = ({ snippets, error }) => {
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.snippets.title}
        description={siteConfig.seo.pages.snippets.description}
        image={siteConfig.seo.pages.snippets.image}
        altText={siteConfig.seo.pages.snippets.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets`}
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
            name: 'Snippets',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/snippets`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={1} snippets={snippets} error={error} />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query SnippetsPage {
        snippets(orderBy: createdAt_DESC, first: 10) {
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
    },
    revalidate: 300
  };
}

export default Snippets;
