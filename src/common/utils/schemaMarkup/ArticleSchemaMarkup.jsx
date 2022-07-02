import Script from 'next/script';

import siteConfig from '../../../../config/site.config';

const ArticleSchemaMarkup = ({
  url,
  title,
  description,
  image,
  author,
  publishedAt,
  updatedAt
}) => {
  return (
    <Script
      type={'application/ld+json'}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
          },
          author: {
            '@type': 'Person',
            name: author
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.seo.copyright,
            logo: {
              '@type': 'ImageObject',
              url: siteConfig.branding.logo
            }
          },
          headline: title,
          description: description,
          image: image,
          datePublished: publishedAt,
          dateModified: updatedAt
        })
      }}
    />
  );
};

export default ArticleSchemaMarkup;
