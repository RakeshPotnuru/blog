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
  Stack,
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
import { Resize } from '@cloudinary/url-gen/actions';

import { CircleIcon } from '@/icons/index.js';
import { MarkdownRenderer } from '@/UIElements/markdownRenderer';
import { SocialShareLinks } from '@/UIElements/index.js';
import { AdSense, buildImage } from '@/utils/index.js';
import siteConfig from '../../../../config/site.config';

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
      {/* Adsense Page top Ad */}
      <Box my={10}>
        <AdSense
          style={{ display: 'inline-block', width: '100%', height: '90px' }}
          adSlot={siteConfig.adsense.slots.pageTop}
        />
      </Box>

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
              src={buildImage(post.featuredImage.public_id)
                .resize(Resize.scale().width(1600).height(840))
                .toURL()}
              alt={post.title}
              htmlWidth={'100%'}
              htmlHeight={'auto'}
            />

            <HStack alignSelf={'flex-start'} py={5} spacing={4}>
              {/* Author image */}
              <Avatar
                name={post.author.name}
                src={buildImage(post.author.photo.public_id).toURL()}
              />
              <VStack spacing={0}>
                {/* Author name */}
                <HStack>
                  <Box color={'brand.50'}>{post.author.name}</Box>
                  <Badge colorScheme={'green'} w={'max-content'}>
                    Author
                  </Badge>
                  {post.sponsored && (
                    <Badge colorScheme={'purple'}>sponsored</Badge>
                  )}
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
                top={{ base: 60, '2xl': 60 }}
                right={{ base: 40, '2xl': 80 }}
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
              <Box mt={4} mb={'-12%'}>
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
            sx={{
                width:"fillAvailaible"
               }}
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
