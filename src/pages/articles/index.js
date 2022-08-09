import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '@/utils/index.js';
import { BreadcrumbSchemaMarkup } from '@/schemaMarkup/index.js';
import siteConfig from '../../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import SearchPage from '@/search/SearchPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const Articles = ({ posts, error }) => {
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.articles.title}
        description={siteConfig.seo.pages.articles.description}
        image={siteConfig.seo.pages.articles.image}
        altText={siteConfig.seo.pages.articles.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
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
            name: 'Articles',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/articles`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={0} posts={posts} error={error} />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query ArticlesPage {
        posts(orderBy: createdAt_DESC, first: 12) {
          featuredImage
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
    },
    revalidate: 300
  };
}

export default Articles;
