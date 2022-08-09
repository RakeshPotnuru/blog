import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '@/utils/index.js';
import { BreadcrumbSchemaMarkup } from '@/schemaMarkup/index.js';
import siteConfig from '../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import ExternalArticlesPage from '@/externalArticles/ExternalArticlesPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const ExternalArticles = ({ articles }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={siteConfig.seo.pages.externalArticles.title}
        description={siteConfig.seo.pages.externalArticles.description}
        image={siteConfig.seo.pages.externalArticles.image}
        altText={siteConfig.seo.pages.externalArticles.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
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
            name: 'External Articles',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/expernal-articles`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <ExternalArticlesPage articles={articles} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query ExternalArticles {
        externalArticles(orderBy: publishedDate_DESC, stage: PUBLISHED) {
          id
          domainName
          logoUrl
          featuredImage
          publishedDate
          title
          description
          url
        }
      }
    `
  });

  return {
    props: {
      articles: data.externalArticles
    },
    revalidate: 300
  };
}

export default ExternalArticles;
