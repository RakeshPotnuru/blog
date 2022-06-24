import { Box, Container } from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

import { Analytics, SEO } from '../../common/util';
import { MarkdownRenderer } from '../../common/UIElements/markdownRenderer';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';

const PrivacyPolicy = ({ data }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={'Privacy Policy | itsrakesh - blog'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        description={
          'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.'
        }
      />
      <Analytics />

      <Navbar />

      <main>
        <Container maxW={'4xl'} my={8}>
          {data && (
            <Box>
              <MarkdownRenderer content={data} />
            </Box>
          )}
        </Container>
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const fileDirectory = path.join(process.cwd(), 'src/data/PrivacyPolicy.md');
  const data = await fs.readFile(fileDirectory);

  return {
    props: {
      data: data.toString()
    }
  };
}

export default PrivacyPolicy;
