import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const Categories = ({ categories, error }) => {
  return (
    <>
      <SEO
        title={'Categories'}
        description={'Explore articles'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={2} categories={categories} error={error} />
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
    }
  };
}

export default Categories;
