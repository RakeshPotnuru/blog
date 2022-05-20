import {
  Box,
  Button,
  Center,
  Heading,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const LatestSnippets = () => {
  const cardShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    'rgba(255, 255, 255, 0.16) 0px 1px 4px'
  );

  return (
    <Box m={{ sm: '5% 10%', md: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>EXPLORE LATEST SNIPPETS</Heading>
      <Wrap my={6}>
        <WrapItem>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
        <WrapItem>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            maxW={60}
            p={5}
            boxShadow={'md'}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            maxW={60}
            p={5}
            boxShadow={'md'}
            borderRadius={'md'}
            cursor={'pointer'}
            tabIndex={0}
            as={motion.div}
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
          >
            <Heading size={'md'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            maxW={60}
            p={5}
            boxShadow={'md'}
            borderRadius={'md'}
            cursor={'pointer'}
            tabIndex={0}
          >
            <Heading size={'md'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            maxW={60}
            p={5}
            boxShadow={'md'}
            borderRadius={'md'}
            cursor={'pointer'}
            tabIndex={0}
          >
            <Heading size={'md'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <ArrowForwardIcon color={'brand.100'} />
            </Heading>
          </Box>
        </WrapItem>
      </Wrap>
      <Center>
        <Button bgColor={'transparent'}>
          Browse all snippets{' '}
          <Box>
            <ChevronRightIcon />
          </Box>
        </Button>
      </Center>
    </Box>
  );
};

export default LatestSnippets;
