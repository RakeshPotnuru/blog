import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={'en'} dir={'ltr'}>
      <Head>
        {/* Google AdSense */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5607528168839545`} // Change this
          crossOrigin={'anonymous'}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
