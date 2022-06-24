import {
  Badge,
  Center,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
  Wrap
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Moment from 'react-moment';
import readingTime from 'reading-time';

import { CircleIcon } from '../../assets/icons';
import TagCard from './TagCard';

const ArticleCard = ({ post }) => {
  const textColor = useColorModeValue('text', '#fff');
  const shadow = useColorModeValue(
    'lg',
    'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  );

  const readTime = readingTime(post.content);

  // Cut description to 180 characters
  const cutText = (text) => {
    return text.substring(0, 180) + '...';
  };

  return (
    <VStack my={10} p={4} borderRadius={'xl'} shadow={shadow} h={'max-content'}>
      {/* Cover image */}
      <NextLink href={`/${post.slug}`} passHref>
        <Link tabIndex={-1}>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={'100%'}
            height={'auto'}
            rounded={'lg'}
            tabIndex={0}
          />
        </Link>
      </NextLink>

      <Wrap
        textTransform={'uppercase'}
        alignSelf={'flex-start'}
        color={'brand.100'}
        fontWeight={'bold'}
      >
        {/* Publication date */}
        <Text>
          <Moment format="MMM DD, YYYY">
            {post.customPublicationDate || post.publishedAt}
          </Moment>
        </Text>
        <Center>
          <CircleIcon boxSize={'2'} />
        </Center>

        {/* Read time */}
        <Text textTransform={'uppercase'}>{readTime.text}</Text>
        {post.sponsored && <Badge>sponsored</Badge>}
      </Wrap>

      {/* Title */}
      <NextLink href={`/${post.slug}`} passHref>
        <Link tabIndex={-1} _hover={{ color: 'brand.50' }}>
          <Heading size={'md'} alignSelf={'flex-start'} tabIndex={0}>
            {post.title}
          </Heading>
        </Link>
      </NextLink>

      {/* Excerpt */}
      <Text alignSelf={'flex-start'} color={textColor}>
        {cutText(post.excerpt)}
      </Text>

      {/* Tags */}
      <Wrap alignSelf={'flex-start'}>
        {post.tags.map((tag, _i) => (
          <TagCard tag={tag} key={_i} />
        ))}
      </Wrap>
    </VStack>
  );
};

export default ArticleCard;
