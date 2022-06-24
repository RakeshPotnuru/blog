import Head from 'next/head';

import siteConfig from '../../../config/site.config';

const Meta = ({ title, description, url, image, canonical, ogType }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.seo.author} />
      <meta name="application-name" content={siteConfig.seo.title} />
      <meta
        name="msapplication-TileColor"
        content={siteConfig.branding.colors.theme}
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content={siteConfig.branding.colors.theme} />
      <meta name="robots" content="index, follow" />

      {/* Web monetization */}
      <meta name="monetization" content={siteConfig.seo.monetizationTag} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteConfig.seo.title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta
        property="twitter:creator"
        content={siteConfig.seo.twitterUsername}
      />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

Meta.defaultProps = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  image: siteConfig.seo.image,
  ogType: siteConfig.seo.ogType,
  canonical: process.env.NEXT_PUBLIC_SITE_URL
};

export default Meta;
