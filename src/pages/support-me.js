import { useRouter } from 'next/router';

import { Analytics, SEO } from '../common/util';
import Navbar from '../common/components/navbar/Navbar';
import { Newsletter } from '../common/components/misc';
import Footer from '../common/components/footer/Footer';
import CopyrightNotice from '../common/components/footer/CopyrightNotice';
import SupportMePage from '../components/supportMe/SupportMePage';

const SupportMe = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={'Support Me | itsrakesh - blog'}
        description={
          'Your support keeps this blog alive and motivates me to keep creating content.'
        }
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
      <CopyrightNotice />
    </>
  );
};

export default SupportMe;
