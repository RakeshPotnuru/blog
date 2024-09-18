import { Box, Center, Link } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box bg="black" color="white" p={1} fontSize={'sm'}>
      <Center>
        Open for hire
        <Link
          href={"mailto:rakesh@itsrakesh.com"}
          // isExternal
          color={'brand.100'}
          ml={1}
        >
          Contact me
        </Link>
      </Center>
    </Box>
  );
};

export default Banner;
