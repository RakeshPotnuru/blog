import {
  Avatar,
  Box,
  Center,
  Flex,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react';

import siteConfig from '../../../../config/site.config';

const CopyrightNotice = () => {
  return (
    <Box
      id={'copyright'}
      py={5}
      px={{ base: 10, md: 20 }}
      bg={'gray.800'}
      color={'white'}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Text>{siteConfig.copyrightText}</Text>
        <Spacer />
        <Text>v{siteConfig.siteVersion}</Text>
      </Flex>
      <Center>
        <Text>
          &lt;/&gt; with 💖 &amp;{' '}
          <Avatar
            size={'xs'}
            name={'NextJs'}
            src={`${process.env.NEXT_PUBLIC_FAVICON_KIT_URL}/nextjs.org/144`}
          />{' '}
          by{' '}
          <Link href={'https://itsrakesh.co'} isExternal>
            Rakesh
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

export default CopyrightNotice;
