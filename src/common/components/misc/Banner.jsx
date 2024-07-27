import { Box, Center, Link } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box bg="black" color="white" p={1} fontSize={'sm'}>
      <Center>
        Support Publish Studio on
        <Link
          href={'https://www.producthunt.com/products/publish-studio'}
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
