import { Box, Heading, Link, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const SnippetCard = ({ snippet }) => {
  const cardShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    'rgba(255, 255, 255, 0.16) 0px 1px 4px'
  );

  return (
    <NextLink href={`/snippets/${snippet.slug}`} passHref>
      <Link tabIndex={-1}>
        <Box
          maxW={60}
          p={5}
          boxShadow={cardShadow}
          borderRadius={'md'}
          borderTopWidth={'4px'}
          borderTopStyle={'solid'}
          borderTopColor={'brand.100'}
          cursor={'pointer'}
          tabIndex={0}
          as={motion.div}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          <Heading size={'md'}>
            {snippet.title} <ArrowForwardIcon color={'brand.100'} />
          </Heading>
        </Box>
      </Link>
    </NextLink>
  );
};

export default SnippetCard;
