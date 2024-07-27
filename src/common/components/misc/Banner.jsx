import { Box, Center, Link } from '@chakra-ui/react';
import siteConfig from '../../../../config/site.config';

const Banner = () => {
  return (
    <Box bg="black" color="white" p={1} fontSize={'sm'}>
      <Center>
        Support Publish Studio on
        <Link
          href={siteConfig.urls.productHunt}
          isExternal
          color={'brand.100'}
          ml={1}
        >
          Product Hunt
        </Link>
      </Center>
    </Box>
  );
};

export default Banner;
