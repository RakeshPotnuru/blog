import Script from 'next/dist/client/script';
import { useRouter } from 'next/router';

import { SEO } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import PostPage from '../components/post/PostPage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';
import CopyrightNotice from '../common/components/footer/CopyrightNotice';

const Post = () => {
  const router = useRouter();
  return (
    <>
      <SEO title={router.query.slug} />
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
       `}
      </Script> */}
      <Navbar />
      <PostPage />
      <Newsletter />
      <Footer />
      <CopyrightNotice />
    </>
  );
};

export default Post;
