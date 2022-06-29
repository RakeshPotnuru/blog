import { useRouter } from 'next/router';

import { Analytics, SEO } from '../common/util';
import siteConfig from '../../config/site.config';
import Navbar from '../common/components/navbar/Navbar';
import SupportMePage from '../components/supportMe/SupportMePage';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';

const SupportMe = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={siteConfig.seo.pages.supportMe.title}
        description={siteConfig.seo.pages.supportMe.description}
        image={siteConfig.seo.pages.supportMe.image}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SupportMePage />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default SupportMe;
