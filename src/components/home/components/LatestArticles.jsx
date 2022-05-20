import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Center,
  Badge,
  useColorModeValue,
  Wrap,
  WrapItem,
  Button,
  Tag
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { CircleIcon } from '../../../assets/icons';

const LatestArticles = () => {
  const cardHoverShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    'rgba(255, 255, 255, 0.16) 0px 1px 4px'
  );
  const textColor = useColorModeValue('text', '#fff');

  return (
    <Box m={{ sm: '5% 10%', md: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>READ LATEST ARTICLES</Heading>
      <SimpleGrid columns={[1, 2]} spacing={5}>
        <VStack
          my={10}
          p={5}
          tabIndex={0}
          borderRadius={'xl'}
          _hover={{ boxShadow: cardHoverShadow }}
        >
          <Image
            src={'https://picsum.photos/id/240/800/420'}
            alt={'ger'}
            width={'100%'}
            height={'auto'}
            rounded={'lg'}
            cursor={'pointer'}
          />
          <HStack
            textTransform={'uppercase'}
            alignSelf={'flex-start'}
            color={'brand.50'}
            fontWeight={'bold'}
          >
            <Box>Oct 18, 2021</Box>
            <Center>
              <CircleIcon boxSize={'2'} />
            </Center>
            <Box>3 min READ</Box>
            <Badge>sponsored</Badge>
          </HStack>
          <Heading size={'lg'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text color={textColor}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem.
            Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi,
            quidem. Quasi, quidem. Quasi, quidem.
          </Text>
          <Wrap alignSelf={'flex-start'}>
            <WrapItem>
              <Badge
                bg={'brand.100'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge
                bg={'brand.200'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #JavaScript
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge
                bg={'brand.300'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge
                bg={'brand.400'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Badge>
            </WrapItem>
          </Wrap>
        </VStack>
        <VStack
          my={10}
          p={5}
          tabIndex={0}
          borderRadius={'xl'}
          _hover={{ boxShadow: cardHoverShadow }}
        >
          <Image
            src={'https://picsum.photos/id/240/800/420'}
            alt={'ger'}
            width={'100%'}
            height={'auto'}
            rounded={'lg'}
          />
          <HStack
            textTransform={'uppercase'}
            alignSelf={'flex-start'}
            color={'brand.50'}
            fontWeight={'bold'}
          >
            <Box>Oct 18, 2021</Box>
            <Center>
              <CircleIcon boxSize={'2'} />
            </Center>
            <Box>3 min READ</Box>
          </HStack>
          <Heading size={'lg'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quasi, quidem. Quasi,
          </Text>
          <Wrap alignSelf={'flex-start'}>
            <WrapItem>
              <Tag
                bg={'brand.100'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                bg={'brand.200'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #JavaScript
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                bg={'brand.300'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                bg={'brand.400'}
                color={'white'}
                px={4}
                py={2}
                tabIndex={0}
                as={motion.div}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                cursor={'pointer'}
              >
                #ReactJs
              </Tag>
            </WrapItem>
          </Wrap>
        </VStack>
        <VStack
          my={10}
          p={5}
          tabIndex={0}
          borderRadius={'xl'}
          _hover={{ boxShadow: cardHoverShadow }}
        >
          <Image
            src={'https://picsum.photos/id/240/800/420'}
            alt={'ger'}
            width={'100%'}
            height={'auto'}
            rounded={'lg'}
          />
          <HStack
            textTransform={'uppercase'}
            alignSelf={'flex-start'}
            color={'brand.50'}
            fontWeight={'bold'}
          >
            <Box>Oct 18, 2021</Box>
            <Center>
              <CircleIcon boxSize={'2'} />
            </Center>
            <Box>3 min READ</Box>
          </HStack>
          <Heading size={'lg'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem.
            Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi,
            quidem. Quasi, quidem. Quasi, quidem.
          </Text>
        </VStack>
        <VStack
          my={10}
          p={5}
          tabIndex={0}
          borderRadius={'xl'}
          _hover={{ boxShadow: cardHoverShadow }}
        >
          <Image
            src={'https://picsum.photos/id/240/800/420'}
            alt={'ger'}
            width={'100%'}
            height={'auto'}
            rounded={'lg'}
          />
          <HStack
            textTransform={'uppercase'}
            alignSelf={'flex-start'}
            color={'brand.50'}
            fontWeight={'bold'}
          >
            <Box>Oct 18, 2021</Box>
            <Center>
              <CircleIcon boxSize={'2'} />
            </Center>
            <Box>3 min READ</Box>
          </HStack>
          <Heading size={'lg'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem.
            Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi,
            quidem. Quasi, quidem. Quasi, quidem.
          </Text>
        </VStack>
      </SimpleGrid>
      <Center>
        <Button bgColor={'transparent'}>
          Browse all articles{' '}
          <Box>
            <ChevronRightIcon />
          </Box>
        </Button>
      </Center>
    </Box>
  );
};

export default LatestArticles;
