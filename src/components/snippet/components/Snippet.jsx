import {
  Avatar,
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  useClipboard,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import Moment from 'react-moment';

import { MarkdownRenderer } from '@/UIElements/markdownRenderer';
import { SocialShareLinks } from '@/UIElements/index.js';
import { AdSense } from 'common/utils';
import siteConfig from '../../../../config/site.config';

const Snippet = ({ snippet }) => {
  const { hasCopied, onCopy } = useClipboard(
    `${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`
  );

  const textColor = useColorModeValue('text', '#fff');

  return (
    <>
      {/* Adsense Page top Ad */}
      <Box my={10}>
        <AdSense
          style={{ display: 'inline-block', width: '100%', height: '90px' }}
          adSlot={siteConfig.adsense.slots.pageTop}
        />
      </Box>

      {/* Snippet body */}
      <Container maxW={'container.md'}>
        <VStack>
          <Box>
            {/* Last updated */}
            {snippet.updatedAt !== snippet.publishedAt && (
              <HStack
                alignSelf={'flex-start'}
                textTransform={'uppercase'}
                mb={5}
                fontSize={'sm'}
              >
                <Box>
                  Last updated:{' '}
                  <Moment format="MMM DD, YYYY">{snippet.updatedAt}</Moment>
                </Box>
              </HStack>
            )}

            <SimpleGrid columns={[1, 2]}>
              <HStack alignSelf={'flex-start'} py={5} spacing={4}>
                {/* Author image */}
                <Avatar
                  name={snippet.author.name}
                  src={snippet.author.photo.url}
                />
                <VStack spacing={0}>
                  {/* Author name */}
                  <HStack>
                    <Box color={'brand.50'}>{snippet.author.name}</Box>{' '}
                    <Badge colorScheme={'green'}>Author</Badge>
                  </HStack>

                  {/* Published date */}
                  <Box alignSelf={'flex-start'} fontSize={'small'}>
                    <Moment format="MMM DD, YYYY">{snippet.publishedAt}</Moment>
                  </Box>
                </VStack>
              </HStack>

              {/* Social-media sharing links */}
              <Center>
                <HStack my={2}>
                  <SocialShareLinks
                    toolTipPlacement={'top'}
                    onCopy={onCopy}
                    hasCopied={hasCopied}
                    slug={snippet.slug}
                    title={snippet.title}
                  />
                </HStack>
              </Center>
            </SimpleGrid>

            <Divider />

            {/* Snippet title */}
            <Heading py={5}>{snippet.title}</Heading>
          </Box>

          {/* Snippet content */}
          <Box lineHeight={1.8} letterSpacing={'wide'} color={textColor}>
            <MarkdownRenderer content={snippet.content} />
          </Box>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Snippet;
