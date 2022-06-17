import {
  Avatar,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useClipboard,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ArrowBackIcon, CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Script from 'next/script';
import Moment from 'react-moment';
import readingTime from 'reading-time';

import { CircleIcon } from '../../../assets/icons';
import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';
import { SocialShareLinks } from '../../../common/UIElements';

const Post = ({ post, loading }) => {
  const [height, setHeight] = useState(0);
  const [sideContentVisibility, setSideContentVisibility] = useState('none');
  const [isLessThan780px] = useMediaQuery('(max-width: 780px)');
  const textColor = useColorModeValue('text', '#fff');
  const { hasCopied, onCopy } = useClipboard(
    `https://blog.itsrakesh.co/${post.slug}`
  );

  const stats = readingTime(post.content);

  useEffect(() => {
    let handleProgress = () => {
      const totalScroll =
        document.documentElement.scrollTop -
        document.getElementById('head-content')?.clientHeight;
      const windowHeight =
        document.getElementById('blog-content')?.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setHeight(scroll);
    };

    window.addEventListener('scroll', handleProgress);
    return () => {
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  useEffect(() => {
    if (Math.floor(height * 100) > 102) {
      setSideContentVisibility('none');
    } else {
      setSideContentVisibility('block');
    }
  }, [height]);

  return (
    <>
      {/* Breadcrumb */}
      <HStack mt={8} ml={6}>
        <NextLink href={'/'} passHref>
          <Link tabIndex={-1}>
            <IconButton
              aria-label={'go back'}
              icon={<ArrowBackIcon />}
              rounded={'full'}
            />
          </Link>
        </NextLink>
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Skeleton isLoaded={!loading}>
              <BreadcrumbLink href={`/articles?c=${post.category.slug}`}>
                {post.category.name}
              </BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
          <BreadcrumbItem />
        </Breadcrumb>
      </HStack>

      {/* Post body */}
      <Container maxW={'container.md'}>
        <VStack>
          <Box id={'head-content'}>
            {/* Last updated and read time */}
            <HStack
              alignSelf={'flex-start'}
              textTransform={'uppercase'}
              mt={7}
              mb={5}
            >
              <Skeleton isLoaded={!loading}>
                <Box>
                  Last updated:{' '}
                  <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
                </Box>
              </Skeleton>
              <Center>
                <CircleIcon boxSize={'2'} />
              </Center>
              <Skeleton isLoaded={!loading}>
                <Box textTransform={'uppercase'}>{stats.text}</Box>
              </Skeleton>
            </HStack>

            {/* Featured image */}
            <Skeleton isLoaded={!loading}>
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                width={'100%'}
                height={'auto'}
              />
            </Skeleton>

            {/* Author image, author name and published date */}
            <HStack alignSelf={'flex-start'} py={5} spacing={4}>
              <SkeletonCircle size={10} isLoaded={!loading}>
                <Avatar name={post.author.name} src={post.author.photo.url} />
              </SkeletonCircle>
              <VStack spacing={0}>
                <HStack>
                  <SkeletonText noOfLines={1} isLoaded={!loading}>
                    <Box color={'brand.50'}>{post.author.name}</Box>
                  </SkeletonText>{' '}
                  <HStack>
                    <SimpleGrid columns={[1, 2]}>
                      <Skeleton isLoaded={!loading}>
                        <Badge colorScheme={'green'}>Author</Badge>
                      </Skeleton>
                      {post.sponsored && (
                        <Skeleton isLoaded={!loading}>
                          <Badge>sponsored</Badge>
                        </Skeleton>
                      )}
                    </SimpleGrid>
                  </HStack>
                </HStack>
                <SkeletonText
                  noOfLines={1}
                  alignSelf={'flex-start'}
                  isLoaded={!loading}
                >
                  <Box alignSelf={'flex-start'} fontSize={'small'}>
                    <Moment format="MMM DD, YYYY">
                      {post.customPublicationDate
                        ? post.customPublicationDate
                        : post.publishedAt}
                    </Moment>
                  </Box>
                </SkeletonText>
              </VStack>
            </HStack>

            {/* Social-media sharing links on devices less than 780px */}
            {isLessThan780px && (
              <Center>
                <HStack my={2}>
                  <SocialShareLinks
                    toolTipPlacement={'top'}
                    isLoaded
                    onCopy={onCopy}
                    hasCopied={hasCopied}
                    title={post.title}
                    slug={post.slug}
                  />
                </HStack>
              </Center>
            )}

            {/* Post reading completion progress indicator and social-media sharing links */}
            {!isLessThan780px && (
              <Box
                id={'side-content'}
                pos={'fixed'}
                top={40}
                right={40}
                display={sideContentVisibility}
              >
                <SkeletonCircle size={14} isLoaded={!loading}>
                  <CircularProgress
                    value={
                      Math.floor(height * 100) < 0
                        ? 0
                        : Math.floor(height * 100)
                    }
                    color={
                      Math.floor(height * 100) >= 100 ? 'green.400' : 'brand.50'
                    }
                  >
                    <CircularProgressLabel>
                      {Math.floor(height * 100) >= 100 ? (
                        <CheckIcon color={'green.400'} fontSize={'lg'} />
                      ) : Math.floor(height * 100) < 0 ? (
                        `${0}%`
                      ) : (
                        `${Math.floor(height * 100)}%`
                      )}
                    </CircularProgressLabel>
                  </CircularProgress>
                </SkeletonCircle>
                <VStack mt={4}>
                  <Box fontWeight={'bold'}>SHARE</Box>
                  <SocialShareLinks
                    toolTipPlacement={'right'}
                    isLoaded={!loading}
                    onCopy={onCopy}
                    hasCopied={hasCopied}
                    title={post.title}
                    slug={post.slug}
                  />
                </VStack>
              </Box>
            )}

            <Divider />

            {/* BeyondWords audio player widget */}
            {post.audioId && (
              <Box my={4} shadow={'lg'}>
                <iframe
                  allowFullScreen={false}
                  src={`https://audio.beyondwords.io/e/${post.audioId}`}
                  frameBorder={'0'}
                  id={'speechkit-io-iframe'}
                  scrolling={'no'}
                  style={{ display: 'none' }}
                ></iframe>
              </Box>
            )}
            <Script
              src={
                'https://proxy.beyondwords.io/npm/@beyondwords/audio-player@latest/dist/module/iframe-helper.js'
              }
              type={'text/javascript'}
            />

            {/* Post title */}
            <SkeletonText isLoaded={!loading}>
              <Heading py={5}>{post.title}</Heading>
            </SkeletonText>
          </Box>

          {/* Post content */}
          <SkeletonText noOfLines={10} spacing={4} isLoaded={!loading}>
            <Box
              lineHeight={1.8}
              letterSpacing={'wide'}
              color={textColor}
              id={'blog-content'}
            >
              <MarkdownRenderer content={post.content} />
            </Box>
          </SkeletonText>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Post;
