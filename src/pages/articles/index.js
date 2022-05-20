import { SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import SearchPage from '../../components/search/SearchPage';

const Articles = () => {
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
      <SearchPage activeTab={0} />
      <Footer />
      <CopyrightNotice />
    </>
  );
};

export default Articles;
