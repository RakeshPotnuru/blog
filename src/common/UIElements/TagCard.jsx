import { Badge, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const tagBgs = [
  'brand.100',
  'brand.200',
  'brand.300',
  'brand.400',
  'brand.500'
];

const TagCard = ({ tag, bg }) => {
  return (
    <NextLink href={`/articles?t=${tag}`} passHref>
      <Link>
        <Badge
          bg={tagBgs[Math.floor(Math.random() * (tagBgs.length - 1) + 1)]}
          color={'white'}
          px={4}
          py={2}
          as={motion.div}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          cursor={'pointer'}
        >
          #{tag}
        </Badge>
      </Link>
    </NextLink>
  );
};

export default TagCard;
