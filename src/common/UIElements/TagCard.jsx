import { Badge, Link, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const tagBgs = [
  'brand.100',
  'brand.200',
  'brand.300',
  'brand.400',
  'brand.500'
];

const TagCard = ({ tag, loading }) => {
  return (
    <NextLink href={`/articles?t=${tag}`} passHref>
      <Link tabIndex={-1}>
        <Skeleton isLoaded={!loading}>
          <Badge
            bg={tagBgs[Math.floor(Math.random() * (tagBgs.length - 1) + 1)]}
            color={'white'}
            px={4}
            py={2}
            cursor={'pointer'}
            tabIndex={0}
            as={motion.div}
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
          >
            #{tag}
          </Badge>
        </Skeleton>
      </Link>
    </NextLink>
  );
};

export default TagCard;
