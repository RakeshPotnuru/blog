import { Box, Container } from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

import { Analytics, SEO } from '../../common/util';
import { MarkdownRenderer } from '../../common/UIElements/markdownRenderer';
import siteConfig from '../../../config/site.config';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';

const TermsAndConditions = ({ data }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={siteConfig.seo.pages.terms.title}
        description={siteConfig.seo.pages.terms.description}
        image={siteConfig.seo.pages.terms.image}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
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
