import { gql } from '@apollo/client';

import { Analytics, SEO, client } from '@/utils/index.js';
import {
  BreadcrumbSchemaMarkup,
  ArticleSchemaMarkup
} from '@/schemaMarkup/index.js';
import siteConfig from '../../../config/site.config';
import Navbar from '@/components/navbar/Navbar';
import SnippetPage from '@/snippet/SnippetPage';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const SnippetHome = ({ snippet, snippets, error }) => {
  return (
    <>
      <SEO
        title={snippet.title}
        description={snippet.description}
        image={siteConfig.seo.pages.snippets.image}
        altText={snippet.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        ogType={'article'}
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
          },
          {
            position: 3,
            name: snippet.title,
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`
          }
        ]}
      />
      <ArticleSchemaMarkup
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${snippet.slug}`}
        title={snippet.title}
        image={siteConfig.seo.pages.snippets.image}
        publishedAt={snippet.publishedAt}
        updatedAt={snippet.updatedAt}
        author={snippet.author.name}
        description={snippet.description}
      />
      <Analytics />

      <Navbar />

      <main>
        <SnippetPage snippet={snippet} snippets={snippets} error={error} />
        <Newsletter />
      </main>

      <Footer />
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
            photo
          }
          slug
          title
          description
          content
          publishedAt
        }
        snippets(
          first: 4
          orderBy: createdAt_DESC
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
    },
    revalidate: 300
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
    fallback: 'blocking'
  };
}

export default SnippetHome;
