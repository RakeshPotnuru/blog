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
import { motion } from 'framer-motion';
import { CircleIcon } from '../../assets/icons';
import Moment from 'react-moment';
import TagCard from './TagCard';

const ArticleCard = ({ post }) => {
  const textColor = useColorModeValue('text', '#fff');

  return (
    <VStack my={10} borderRadius={'xl'}>
      {/* Cover image */}
      <Skeleton isLoaded>
        <NextLink href={`/${post.slug}`} passHref>
          <Link>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              width={'100%'}
              height={'auto'}
              rounded={'lg'}
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
        <Skeleton isLoaded>
          <Text>
            <Moment format="MMM DD, YYYY">{post.publishedAt}</Moment>
          </Text>
        </Skeleton>
        <Center>
          <CircleIcon boxSize={'2'} />
        </Center>
        <Skeleton isLoaded>
          <Text>3 min READ</Text>
        </Skeleton>
        {post.sponsored && (
          <Skeleton isLoaded>
            <Badge>sponsored</Badge>
          </Skeleton>
        )}
      </Wrap>

      {/* Title */}
      <SkeletonText noOfLines={2} alignSelf={'flex-start'} isLoaded>
        <NextLink href={`/${post.slug}`} passHref>
          <Link _hover={{ color: 'brand.50' }}>
            <Heading size={'md'}>{post.title}</Heading>
          </Link>
        </NextLink>
      </SkeletonText>

      {/* Excerpt */}
      <SkeletonText noOfLines={4} spacing={4} alignSelf={'flex-start'} isLoaded>
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
