import {
  Badge,
  Center,
  Heading,
  Image,
  Link,
  Skeleton,
  SkeletonText,
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

const ArticleCard = ({ post, loading }) => {
  const textColor = useColorModeValue('text', '#fff');

  const stats = readingTime(post.content);

  return (
    <VStack my={10} borderRadius={'xl'}>
      {/* Cover image */}
      <Skeleton isLoaded={!loading}>
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
      </Skeleton>

      {/* Publication date, read time & sponsored badge */}
      <Wrap
        textTransform={'uppercase'}
        alignSelf={'flex-start'}
        color={'brand.50'}
        fontWeight={'bold'}
      >
        <Skeleton isLoaded={!loading}>
          <Text>
            <Moment format="MMM DD, YYYY">
              {post.customPublicationDate || post.publishedAt}
            </Moment>
          </Text>
        </Skeleton>
        <Center>
          <CircleIcon boxSize={'2'} />
        </Center>
        <Skeleton isLoaded={!loading}>
          <Text textTransform={'uppercase'}>{stats.text}</Text>
        </Skeleton>
        {post.sponsored && (
          <Skeleton isLoaded>
            <Badge>sponsored</Badge>
          </Skeleton>
        )}
      </Wrap>

      {/* Title */}
      <SkeletonText noOfLines={2} alignSelf={'flex-start'} isLoaded={!loading}>
        <NextLink href={`/${post.slug}`} passHref>
          <Link tabIndex={-1} _hover={{ color: 'brand.50' }}>
            <Heading size={'md'} tabIndex={0}>
              {post.title}
            </Heading>
          </Link>
        </NextLink>
      </SkeletonText>

      {/* Excerpt */}
      <SkeletonText
        noOfLines={4}
        spacing={4}
        alignSelf={'flex-start'}
        isLoaded={!loading}
      >
        <Text color={textColor}>{post.excerpt}</Text>
      </SkeletonText>

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
