import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { SnippetCard } from '../../../common/UIElements';

const LatestSnippets = ({ snippets }) => {
  return (
    <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>EXPLORE LATEST SNIPPETS</Heading>
      <Wrap my={6}>
        {snippets.map((snippet) => {
          return <SnippetCard key={snippet.id} snippet={snippet} />;
        })}
      </Wrap>
      <Center>
        <NextLink href={'/snippets'} passHref>
          <Link tabIndex={-1}>
            <Button bgColor={'transparent'}>
              Browse all snippets{' '}
              <Box>
                <ChevronRightIcon />
              </Box>
            </Button>
          </Link>
        </NextLink>
      </Center>
    </Box>
  );
};

export default LatestSnippets;
