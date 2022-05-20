import Script from 'next/script';

import { SEO } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import HomePage from '../components/home/HomePage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';
import CopyrightNotice from '../common/components/footer/CopyrightNotice';

const Home = () => {
  return (
    <>
      <SEO />
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy={'afterInteractive'}
      />
      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
       `}
      </Script> */}
      <Navbar />
      <HomePage />
      <Newsletter />
      <Footer />
      <CopyrightNotice />
    </>
  );
};

export default Home;
