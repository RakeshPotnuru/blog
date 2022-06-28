import { useState, useEffect } from 'react';
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
  useClipboard,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import { ArrowBackIcon, CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Script from 'next/script';
import Moment from 'react-moment';
import readingTime from 'reading-time';

import { CircleIcon } from '../../../assets/icons';
import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';
import { SocialShareLinks } from '../../../common/UIElements';

const Post = ({ post }) => {
  const [height, setHeight] = useState(0);
  const [sideContentVisibility, setSideContentVisibility] = useState('none');
  const [isLessThan1180px] = useMediaQuery('(max-width: 1180px)');
  const textColor = useColorModeValue('text', '#fff');
  const { hasCopied, onCopy } = useClipboard(
    `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
  );

  const readTime = readingTime(post.content);

  // Calculate and update the height of the post content
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

  // Auto-hide the side content visibility after progress reaches 100%
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
            <BreadcrumbLink href={`/articles?c=${post.category.slug}`}>
              {post.category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem />
        </Breadcrumb>
      </HStack>

      {/* Post body */}
      <Container maxW={'container.md'}>
        <VStack>
          <Box id={'head-content'}>
            <HStack
              alignSelf={'flex-start'}
              textTransform={'uppercase'}
              mt={7}
              mb={5}
              fontSize={'sm'}
            >
              {/* Last updated */}
              <Box>
                Last updated:{' '}
                <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
              </Box>
              <Center>
                <CircleIcon boxSize={'2'} />
              </Center>

              {/* Read time */}
              <Box textTransform={'uppercase'}>{readTime.text}</Box>
            </HStack>

            {/* Featured image */}
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              width={'100%'}
              height={'auto'}
            />

            <HStack alignSelf={'flex-start'} py={5} spacing={4}>
              {/* Author image */}
              <Avatar name={post.author.name} src={post.author.photo.url} />
              <VStack spacing={0}>
                {/* Author name */}
                <HStack>
                  <Box color={'brand.50'}>{post.author.name}</Box>{' '}
                  <HStack>
                    <SimpleGrid columns={[1, 2]}>
                      <Badge colorScheme={'green'}>Author</Badge>
                      {post.sponsored && <Badge>sponsored</Badge>}
                    </SimpleGrid>
                  </HStack>
                </HStack>

                {/* Published date */}
                <Box alignSelf={'flex-start'} fontSize={'small'}>
                  <Moment format="MMM DD, YYYY">
                    {post.customPublicationDate
                      ? post.customPublicationDate
                      : post.publishedAt}
                  </Moment>
                </Box>
              </VStack>
            </HStack>

            {/* Social media sharing links on devices whose resolution is less than 780px */}
            {isLessThan1180px && (
              <Center>
                <HStack my={2}>
                  <SocialShareLinks
                    toolTipPlacement={'top'}
                    onCopy={onCopy}
                    hasCopied={hasCopied}
                    title={post.title}
                    slug={post.slug}
                  />
                </HStack>
              </Center>
            )}

            {/* Post reading completion progress indicator */}
            {!isLessThan1180px && (
              <Box
                id={'side-content'}
                pos={'fixed'}
                top={40}
                right={40}
                display={sideContentVisibility}
              >
                <CircularProgress
                  value={
                    Math.floor(height * 100) < 0 ? 0 : Math.floor(height * 100)
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

                {/* Social media sharing links */}
                <VStack mt={4}>
                  <Box fontWeight={'bold'}>SHARE</Box>
                  <SocialShareLinks
                    toolTipPlacement={'right'}
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
                  style={{ width: '100%' }}
                ></iframe>
              </Box>
            )}
            <Script
              src={
                'https://proxy.beyondwords.io/npm/@beyondwords/audio-player@latest/dist/module/iframe-helper.js'
              }
              type={'text/javascript'} 
              strategy={'beforeInteractive'}
            />

            {/* Post title */}
            <Heading py={5}>{post.title}</Heading>
          </Box>

          {/* Post content */}
          <Box
            lineHeight={1.8}
            letterSpacing={'wide'}
            color={textColor}
            id={'blog-content'}
          >
            <MarkdownRenderer content={post.content} />
          </Box>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Post;
