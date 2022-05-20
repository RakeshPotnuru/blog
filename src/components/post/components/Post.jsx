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
  Link, Skeleton, SkeletonCircle, SkeletonText,
  Tooltip,
  useClipboard,
  useColorModeValue,
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

const Post = () => {
  const [height, setHeight] = useState(0);
  const [sideContentVisibility, setSideContentVisibility] = useState('');
  const [normalLink, setNormalLink] = useState('http://localhost:3000/rgw');

  const { hasCopied, onCopy } = useClipboard(normalLink);

  const textColor = useColorModeValue('text', '#fff');

  const [content, setContent] = useState('');
  useEffect(() => {
    const data = fetch(
      'https://gist.githubusercontent.com/RakeshPotnuru/174ed1bb1b57bd16cd9a3ac8dc6db980/raw/d635953263133fd4ca557b2f706c8b798075d19f/example.md'
    );
    data.then((res) => res.text()).then((res) => setContent(res));
  }, []);

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
      <HStack mt={8} ml={6}>
        <IconButton
          aria-label={'go back'}
          icon={<ArrowBackIcon />}
          rounded={'full'}
        />
        <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <Skeleton isLoaded>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Skeleton isLoaded>
              <BreadcrumbLink href='#'>Web Development</BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Skeleton isLoaded>
              <BreadcrumbLink href='#'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <Container maxW={'container.sm'}>
        <VStack>
          <Box id={'head-content'}>
            <HStack
              alignSelf={'flex-start'}
              textTransform={'uppercase'}
              mt={7}
              mb={5}
            >
              <Skeleton isLoaded><Box>Last updated: Oct 18, 2021</Box></Skeleton>
              <Center>
                <CircleIcon boxSize={'2'} />
              </Center>
              <Skeleton isLoaded><Box>3 min READ</Box></Skeleton>
            </HStack>
            <Skeleton isLoaded>
              <Image
                src={'https://picsum.photos/id/242/800/420'}
                alt={'ger'}
                width={'100%'}
                height={'auto'}
              />
            </Skeleton>
            <HStack alignSelf={'flex-start'} py={5}>
              <SkeletonCircle size={10} isLoaded><Avatar name='Rakesh Potnuru' /></SkeletonCircle>
              <VStack spacing={0}>
                <HStack>
                  <SkeletonText noOfLines={1} isLoaded><Box color={'brand.50'}>Rakesh Potnuru</Box></SkeletonText>{' '}
                  <Skeleton isLoaded><Badge colorScheme={'green'}>Author</Badge></Skeleton>
                </HStack>
                <SkeletonText noOfLines={1} alignSelf={'flex-start'} isLoaded>
                  <Box alignSelf={'flex-start'} fontSize={'small'}>
                    Oct 18, 2021
                  </Box>
                </SkeletonText>
              </VStack>
            </HStack>
            <Divider />
            <SkeletonText isLoaded>
              <Heading py={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Heading>
            </SkeletonText>
          </Box>

          <Box
            id={'side-content'}
            pos={'fixed'}
            top={40}
            right={60}
            display={sideContentVisibility}
          >
            <SkeletonCircle size={14} isLoaded>
              <CircularProgress
                value={
                  Math.floor(height * 100) < 0 ? 0 : Math.floor(height * 100)
                }
                color={Math.floor(height * 100) >= 100 ? 'green.400' : 'brand.50'}
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
              <SkeletonCircle size={10} isLoaded>
                <Tooltip hasArrow label='Share on Twitter' placement={'right'}>
                  <Link
                    className={'twitter-share-button'}
                    href={`https://twitter.com/share?&text=Difference%20Between%20HTML%20and%20CSS&via=interview_bit&url=https://www.interviewbit.com/blog/difference-between-html-and-css/`}
                    isExternal
                  >
                    <IconButton
                      aria-label={'share on twitter'}
                      icon={<FaTwitter />}
                      rounded={'full'}
                    />
                  </Link>
                </Tooltip>
              </SkeletonCircle>
              <SkeletonCircle size={10} isLoaded>
                <Tooltip hasArrow label='Share on LinkedIn' placement={'right'}>
                  <Link
                    href={
                      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.interviewbit.com/blog/difference-between-html-and-css/'
                    }
                    isExternal
                  >
                    <IconButton
                      aria-label='share on linkedin'
                      icon={<FaLinkedin />}
                      rounded={'full'}
                    />
                  </Link>
                </Tooltip>
              </SkeletonCircle>
              <SkeletonCircle size={10} isLoaded>
                <Tooltip hasArrow label='Share on Facebook' placement={'right'}>
                  <Link
                    href={
                      'https://www.facebook.com/sharer.php?u=https://www.interviewbit.com/blog/difference-between-html-and-css/'
                    }
                    isExternal
                  >
                    <IconButton
                      aria-label={'share on facebook'}
                      icon={<FaFacebook />}
                      rounded={'full'}
                    />
                  </Link>
                </Tooltip>
              </SkeletonCircle>
              <SkeletonCircle size={10} isLoaded>
                <Tooltip hasArrow label='Share on Reddit' placement={'right'}>
                  <Link
                    href={
                      'https://www.reddit.com/submit?url=https://www.interviewbit.com/blog/difference-between-html-and-css/'
                    }
                    isExternal
                  >
                    <IconButton
                      aria-label='share on reddit'
                      icon={<FaReddit />}
                      rounded={'full'}
                    />
                  </Link>
                </Tooltip>
              </SkeletonCircle>
              <SkeletonCircle size={10} isLoaded>
                <Tooltip hasArrow label='Copy Link' placement={'right'}>
                  <IconButton
                    onClick={onCopy}
                    aria-label='copy link'
                    icon={
                      hasCopied ? (
                        <CheckIcon color={'white'} fontSize={'lg'} />
                      ) : (
                        <FaLink />
                      )
                    }
                    bg={hasCopied ? 'green.400' : 'gray.100'}
                    rounded={'full'}
                  />
                </Tooltip>
              </SkeletonCircle>
            </VStack>
          </Box>
          <SkeletonText noOfLines={10} spacing={4} isLoaded>
            <Box
              lineHeight={1.8}
              letterSpacing={'wide'}
              color={textColor}
              id={'blog-content'}
            >
              <MarkdownRenderer content={content} />
            </Box>
          </SkeletonText>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Post;
