import { gql } from '@apollo/client';
import { Newsletter } from '../../common/components/misc';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import SearchPage from '../../components/search/SearchPage';

const Articles = ({ posts }) => {
  return (
    <>
      <SEO
        title={'Articles'}
        description={'Read articles'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={0} posts={posts} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const { data, loading } = await client.query({
    query: gql`
      query ArticlesPage {
        posts(orderBy: publishedAt_DESC, first: 4) {
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
        }
      }
    `
  });

  return {
    props: {
      posts: data.posts,
      loading
    }
  };
}

export default Articles;
