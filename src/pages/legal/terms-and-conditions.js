import { Box, Container } from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

import { Analytics, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import { MarkdownRenderer } from '../../common/UIElements/markdownRenderer';

const TermsAndConditions = ({ data }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={'Terms & Conditions | itsrakesh - blog'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        description={
          "These terms and conditions outline the rules and regulations for the use of itsrakesh's Website, located at itsrakesh - blog."
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
  const fileDirectory = path.join(
    process.cwd(),
    'src/data/TermsAndConditions.md'
  );
  const data = await fs.readFile(fileDirectory);

  return {
    props: {
      data: data.toString()
    }
  };
}

export default TermsAndConditions;
