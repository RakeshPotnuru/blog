import { SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';

const Category = () => {
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
    </>
  );
};

export default Category;
