import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useClipboard,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import Moment from 'react-moment';

import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';
import { SocialShareLinks } from '../../../common/UIElements';

const Snippet = ({ snippet, loading }) => {
  const { hasCopied, onCopy } = useClipboard(
    `https://blog.itsrakesh.co/snippets/${snippet.slug}`
  );

  const textColor = useColorModeValue('text', '#fff');

  return (
    <>
      {/* Snippet body */}
      <Container maxW={'container.md'}>
        <VStack>
          <Box>
            {/* Last updated */}
            {snippet.updatedAt !== snippet.publishedAt && (
              <HStack
                alignSelf={'flex-start'}
                textTransform={'uppercase'}
                mt={7}
                mb={5}
              >
                <Skeleton isLoaded={!loading}>
                  <Box>
                    Last updated:{' '}
                    <Moment format="MMM DD, YYYY">{snippet.updatedAt}</Moment>
                  </Box>
                </Skeleton>
              </HStack>
            )}

            <SimpleGrid columns={[1, 2]}>
              {/* Author image, author name and published date */}
              <HStack alignSelf={'flex-start'} py={5} spacing={4}>
                <SkeletonCircle size={10} isLoaded={!loading}>
                  <Avatar
                    name={snippet.author.name}
                    src={snippet.author.photo.url}
                  />
                </SkeletonCircle>
                <VStack spacing={0}>
                  <HStack>
                    <SkeletonText noOfLines={1} isLoaded={!loading}>
                      <Box color={'brand.50'}>{snippet.author.name}</Box>
                    </SkeletonText>{' '}
                    <Skeleton isLoaded>
                      <Badge colorScheme={'green'}>Author</Badge>
                    </Skeleton>
                  </HStack>
                  <SkeletonText
                    noOfLines={1}
                    alignSelf={'flex-start'}
                    isLoaded={!loading}
                  >
                    <Box alignSelf={'flex-start'} fontSize={'small'}>
                      <Moment format="MMM DD, YYYY">
                        {snippet.publishedAt}
                      </Moment>
                    </Box>
                  </SkeletonText>
                </VStack>
              </HStack>

              {/* Social-media sharing links */}
              <HStack my={2}>
                <SocialShareLinks
                  toolTipPlacement={'top'}
                  isLoaded
                  onCopy={onCopy}
                  hasCopied={hasCopied}
                  slug={snippet.slug}
                  title={snippet.title}
                />
              </HStack>
            </SimpleGrid>

            <Divider />

            {/* Snippet title */}
            <SkeletonText isLoaded={!loading}>
              <Heading py={5}>{snippet.title}</Heading>
            </SkeletonText>
          </Box>

          {/* Snippet content */}
          <SkeletonText noOfLines={10} spacing={4} isLoaded={!loading}>
            <Box lineHeight={1.8} letterSpacing={'wide'} color={textColor}>
              <MarkdownRenderer content={snippet.content} />
            </Box>
          </SkeletonText>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Snippet;
