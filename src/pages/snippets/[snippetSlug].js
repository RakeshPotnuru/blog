import { gql } from '@apollo/client';

import { Analytics, SEO, client } from '../../common/util';
import siteConfig from '../../../config/site.config';
import Navbar from '../../common/components/navbar/Navbar';
import SnippetPage from '../../components/snippet/SnippetPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const SnippetHome = ({ snippet, snippets, error }) => {
  
  return (
    <>
      <SEO
        title={snippet.title}
        description={snippet.description}
        image={siteConfig.seo.pages.snippets.image}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        ogType={'article'}
      />
      <Analytics />

      <Navbar />

      <main>
        <SnippetPage snippet={snippet} snippets={snippets} error={error} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { snippetSlug } = params;

  const { data, error } = await client.query({
    query: gql`
      query SnippetPage($slug: String!) {
        snippet(where: { slug: $slug }, stage: PUBLISHED) {
          updatedAt
          author {
            bio
            name
            photo {
              url
            }
          }
          slug
          title
          description
          content
          publishedAt
        }
        snippets(
          first: 4
          orderBy: publishedAt_ASC
          where: { slug_not: $slug }
        ) {
          title
          slug
          id
        }
      }
    `,
    variables: {
      slug: snippetSlug
    }
  });

  return {
    props: {
      snippet: data?.snippet,
      snippets: data?.snippets,
      error: error ? error.message : null
    }
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query SnippetSlugs {
        snippets {
          slug
        }
      }
    `
  });

  const paths = data?.snippets?.map((snippet) => {
    return {
      params: {
        snippetSlug: snippet.slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default SnippetHome;
