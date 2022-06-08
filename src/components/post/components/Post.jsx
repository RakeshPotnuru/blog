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
  Tooltip,
  useClipboard,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ArrowBackIcon, CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaReddit,
  FaLink
} from 'react-icons/fa';

import { CircleIcon } from '../../../assets/icons';
import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';
import Script from 'next/script';
import Moment from 'react-moment';

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
  title,
  slug
}) => {
  return (
    <>
      <SocialShareIcon
        isLoaded
        label={'Share on Twitter'}
        placement={toolTipPlacement}
        href={`https://twitter.com/intent/tweet?url=https://blog.itsrakesh.co/${slug}&text="${title}"%20by%20@rakesh_at_tweet`}
        icon={<FaTwitter />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on LinkedIn'}
        placement={toolTipPlacement}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.itsrakesh.co/${slug}`}
        icon={<FaLinkedin />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Facebook'}
        placement={toolTipPlacement}
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.itsrakesh.co/${slug}`}
        icon={<FaFacebook />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Reddit'}
        placement={toolTipPlacement}
        href={`https://reddit.com/submit?url=https://blog.itsrakesh.co/${slug}&title=${title}`}
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

const Post = ({ post }) => {
  const [height, setHeight] = useState(0);
  const [sideContentVisibility, setSideContentVisibility] = useState('');
  const [isLessThan780px] = useMediaQuery('(max-width: 780px)');
  const { hasCopied, onCopy } = useClipboard(
    `https://blog.itsrakesh.co/${post.slug}`
  );

  const textColor = useColorModeValue('text', '#fff');

  useEffect(() => {
    let handleProgress = () => {
      const totalScroll =
        document.documentElement.scrollTop -
        document.getElementById('head-content').clientHeight;
      const windowHeight = document.getElementById('blog-content').clientHeight;
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
        <IconButton
          aria-label={'go back'}
          icon={<ArrowBackIcon />}
          rounded={'full'}
        />
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <Skeleton isLoaded>
              <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Skeleton isLoaded>
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
              <Skeleton isLoaded>
                <Box>
                  Last updated:{' '}
                  <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
                </Box>
              </Skeleton>
              <Center>
                <CircleIcon boxSize={'2'} />
              </Center>
              <Skeleton isLoaded>
                <Box>3 min READ</Box>
              </Skeleton>
            </HStack>

            {/* Featured image */}
            <Skeleton isLoaded>
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                width={'100%'}
                height={'auto'}
              />
            </Skeleton>

            {/* Author image, author name and published date */}
            <HStack alignSelf={'flex-start'} py={5} spacing={4}>
              <SkeletonCircle size={10} isLoaded>
                <Avatar name={post.author.name} src={post.author.photo.url} />
              </SkeletonCircle>
              <VStack spacing={0}>
                <HStack>
                  <SkeletonText noOfLines={1} isLoaded>
                    <Box color={'brand.50'}>{post.author.name}</Box>
                  </SkeletonText>{' '}
                  <HStack>
                    <SimpleGrid columns={[1, 2]}>
                      <Skeleton isLoaded>
                        <Badge colorScheme={'green'}>Author</Badge>
                      </Skeleton>
                      {post.sponsored && (
                        <Skeleton isLoaded>
                          <Badge>sponsored</Badge>
                        </Skeleton>
                      )}
                    </SimpleGrid>
                  </HStack>
                </HStack>
                <SkeletonText noOfLines={1} alignSelf={'flex-start'} isLoaded>
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
                <SkeletonCircle size={14} isLoaded>
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
                    isLoaded
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
            <SkeletonText isLoaded>
              <Heading py={5}>{post.title}</Heading>
            </SkeletonText>
          </Box>

          {/* Post content */}
          <SkeletonText noOfLines={10} spacing={4} isLoaded>
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
