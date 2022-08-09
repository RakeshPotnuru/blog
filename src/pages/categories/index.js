import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '@/utils/index.js';
import { BreadcrumbSchemaMarkup } from '@/schemaMarkup/index.js';
import siteConfig from '../../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import SearchPage from '@/search/SearchPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const Categories = ({ categories, error }) => {
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.categories.title}
        description={siteConfig.seo.pages.categories.description}
        image={siteConfig.seo.pages.categories.image}
        altText={siteConfig.seo.pages.categories.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
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
            name: 'Categories',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/categories`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={2} categories={categories} error={error} />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query CategoriesPage {
        categories {
          id
          name
          slug
        }
      }
    `
  });

  return {
    props: {
      categories: data?.categories,
      error: error ? error.message : null
    },
    revalidate: 300
  };
}

export default Categories;
