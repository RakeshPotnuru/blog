import { Badge, Link, Skeleton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const TagCard = ({ tag }) => {
  return (
    <NextLink href={`/articles?t=${tag}`} passHref>
      <Link tabIndex={-1}>
        <Badge
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
      </Link>
    </NextLink>
  );
};

export default TagCard;
