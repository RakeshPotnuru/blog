import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaReddit,
  FaLink
} from 'react-icons/fa';
import Moment from 'react-moment';

import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';

const SocialShareIcon = ({ isLoaded, label, placement, href, icon }) => {
  return (
    <SkeletonCircle size={10} isLoaded={isLoaded}>
      <Tooltip hasArrow label={label} placement={placement}>
        <Link href={href} isExternal>
          <IconButton aria-label={label} icon={icon} rounded={'full'} />
        </Link>
      </Tooltip>
    </SkeletonCircle>
  );
};

const SocialShareLinks = ({
  toolTipPlacement,
  isLoaded,
  onCopy,
  hasCopied,
  slug,
  text,
  title
}) => {
  return (
    <>
      <SocialShareIcon
        isLoaded
        label={'Share on Twitter'}
        placement={toolTipPlacement}
        href={`https://twitter.com/intent/tweet?url=https://blog.itsrakesh.co/snippets/${slug}&text="${title}"%20by%20@rakesh_at_tweet`}
        icon={<FaTwitter />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on LinkedIn'}
        placement={toolTipPlacement}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.itsrakesh.co/snippets/${slug}`}
        icon={<FaLinkedin />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Facebook'}
        placement={toolTipPlacement}
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.itsrakesh.co/snippets/${slug}`}
        icon={<FaFacebook />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Reddit'}
        placement={toolTipPlacement}
        href={`https://reddit.com/submit?url=https://blog.itsrakesh.co/snippets/${slug}&title=${title}`}
        icon={<FaReddit />}
      />
      <SkeletonCircle size={10} isLoaded={isLoaded}>
        <Tooltip hasArrow label="Copy Link" placement={toolTipPlacement}>
          <IconButton
            onClick={onCopy}
            aria-label="copy link"
            icon={
              hasCopied ? (
                <CheckIcon color={'white'} fontSize={'lg'} />
              ) : (
                <FaLink />
              )
            }
            {...(hasCopied && { bg: 'green.400', _hover: { bg: 'green.500' } })}
            rounded={'full'}
          />
        </Tooltip>
      </SkeletonCircle>
    </>
  );
};

const Snippet = ({ snippet }) => {
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
                <Skeleton isLoaded>
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
                <SkeletonCircle size={10} isLoaded>
                  <Avatar
                    name={snippet.author.name}
                    src={snippet.author.photo.url}
                  />
                </SkeletonCircle>
                <VStack spacing={0}>
                  <HStack>
                    <SkeletonText noOfLines={1} isLoaded>
                      <Box color={'brand.50'}>{snippet.author.name}</Box>
                    </SkeletonText>{' '}
                    <Skeleton isLoaded>
                      <Badge colorScheme={'green'}>Author</Badge>
                    </Skeleton>
                  </HStack>
                  <SkeletonText noOfLines={1} alignSelf={'flex-start'} isLoaded>
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
            <SkeletonText isLoaded>
              <Heading py={5}>{snippet.title}</Heading>
            </SkeletonText>
          </Box>

          {/* Snippet content */}
          <SkeletonText noOfLines={10} spacing={4} isLoaded>
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
