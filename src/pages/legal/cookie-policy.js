import { Box, Container } from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

import { Analytics, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import { MarkdownRenderer } from '../../common/UIElements/markdownRenderer';

const CookiePolicy = ({ data }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={'Cookie Policy | itsrakesh - blog'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        description={
          'In this Cookie Policy we will provide you with detailed information on how itsrakesh - blog (hereinafter - the "we" or "our"), shall undertake to ensure the security of personal information and the protection of rights of the visitors and users of the websites '
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
  const fileDirectory = path.join(process.cwd(), 'src/data/CookiePolicy.md');
  const data = await fs.readFile(fileDirectory);

  return {
    props: {
      data: data.toString()
    }
  };
}

export default CookiePolicy;
