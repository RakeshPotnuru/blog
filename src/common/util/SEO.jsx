import Head from 'next/head';

const Meta = ({
  title,
  description,
  keywords,
  url,
  image,
  canonical,
  ogType
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rakesh Potnuru" />
      <meta name="application-name" content="itsrakesh - blog" />
      <meta name="msapplication-TileColor" content="#7868E6" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#7868E6" />
      <meta name="robots" content="index, follow" />

      {/* Web monetization */}
      <meta name="monetization" content="$ilp.uphold.com/82eq8NKY4NEZ" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="its rakesh" />
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
      <meta property="twitter:creator" content="@rakesh_at_tweet" />

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
  title: 'itsrakesh - blog',
  description:
    'Hi, I am Rakesh Potnuru, a web developer and technical writer. I write about programming, software and web development.',
  keywords:
    'Rakesh Potnuru, content writer, technical writer, blog, programming, software, web development, coding',
  url: 'https://blog.itsrakesh.co',
  image:
    'https://ik.imagekit.io/itsrakesh/Blog/itsrakesh_-_blog_PqXT-2m88.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646654484669',
  ogType: 'website',
  canonical: 'https://blog.itsrakesh.co'
};

export default Meta;
