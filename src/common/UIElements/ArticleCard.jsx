import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  Image, Skeleton, SkeletonText,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { CircleIcon } from '../../assets/icons';
import { motion } from 'framer-motion';

const ArticleCard = () => {
  const cardHoverShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    'rgba(255, 255, 255, 0.16) 0px 1px 4px'
  );
  const textColor = useColorModeValue('text', '#fff');

  return (
    <VStack
      my={10}
      p={5}
      tabIndex={0}
      borderRadius={'xl'}
      _hover={{ boxShadow: cardHoverShadow }}
    >
      <Skeleton isLoaded>
        <Image
          src={'https://picsum.photos/id/240/800/420'}
          alt={'ger'}
          width={'100%'}
          height={'auto'}
          rounded={'lg'}
          cursor={'pointer'}
        />
      </Skeleton>
      <HStack
        textTransform={'uppercase'}
        alignSelf={'flex-start'}
        color={'brand.50'}
        fontWeight={'bold'}
      >
        <Skeleton isLoaded><Box>Oct 18, 2021</Box></Skeleton>
        <Center>
          <CircleIcon boxSize={'2'} />
        </Center>
        <Skeleton isLoaded><Box>3 min READ</Box></Skeleton>
        <Skeleton isLoaded><Badge>sponsored</Badge></Skeleton>
      </HStack>
      <SkeletonText noOfLines={2} isLoaded>
        <Heading size={'md'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
      </SkeletonText>
      <SkeletonText noOfLines={4} spacing={4} isLoaded>
        <Text color={textColor}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem.
          Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi, quidem. Quasi,
          quidem. Quasi, quidem. Quasi, quidem.
        </Text>
      </SkeletonText>
      <Wrap alignSelf={'flex-start'}>
        <WrapItem>
          <Skeleton isLoaded>
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
          </Skeleton>
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
  );
};

export default ArticleCard;
