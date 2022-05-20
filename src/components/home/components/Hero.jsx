import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { Searchbar } from '../../../common/UIElements';

const CategoryItem = ({ gradient, children }) => {
  return (
    <Center>
      <GridItem colSpan={1} m={5}>
        <Center
          width={115}
          height={50}
          bgGradient={gradient}
          borderRadius={'md'}
          shadow={'md'}
          cursor={'pointer'}
          tabIndex={0}
          as={motion.div}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          {children}
        </Center>
      </GridItem>
    </Center>
  );
};

const Hero = () => {
  const truncate = ({ text }) => {
    return text.length > 85 ? text.substring(0, 80) + '...' : text;
  };

  return (
    <Box m={{ md: '5% 10%', '2xl': '5% 15%' }}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <VStack
          cursor={'pointer'}
          tabIndex={0}
          maxH={{ md: '360px', '2xl': '420px' }}
          as={motion.div}
          whileHover={{ y: -10 }}
          whileTap={{ y: 0 }}
        >
          <Box shadow={'lg'} borderRadius={'2xl'}>
            <Image
              src={'https://picsum.photos/id/240/800/420'}
              alt={'featured'}
              rounded={'2xl'}
              objectFit={'cover'}
            />
          </Box>
          <Box
            p={'1% 3%'}
            w={'fit-content'}
            bg={'black'}
            borderRadius={'md'}
            pos={'relative'}
            bottom={{ md: '94%', '2xl': '98%' }}
            left={'2%'}
            alignSelf={'self-start'}
            fontWeight={'bold'}
          >
            <Text bgGradient={'linear(to-l, #7928CA, #FF0080)'} bgClip={'text'}>
              FEATURED
            </Text>
          </Box>
          <Box
            pos={'relative'}
            bottom={{ md: '44.5%', '2xl': '43%' }}
            minH={'30%'}
            maxH={'30%'}
            w={'100%'}
            maxW={'800px'}
            bgGradient={
              'linear(45deg, rgba(0,0,0,0.7460026246826856) 38%, rgba(0,0,0,0.4154704117975315) 100%)'
            }
            p={5}
            borderBottomRadius={'2xl'}
          >
            <Heading size={'lg'} color={'white'}>
              {truncate({
                text: '8 best open source projects you should try out'
              })}
            </Heading>
          </Box>
        </VStack>
        <Spacer />
        <Box>
          <Grid ml={15}>
            <GridItem colSpan={2} m={5}>
              <Searchbar placeholder="Search categories" />
            </GridItem>
            <CategoryItem
              gradient={
                'linear(102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3%)'
              }
            >
              Web dev
            </CategoryItem>
            <CategoryItem
              gradient={
                'radial(circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2%)'
              }
            >
              Open Source
            </CategoryItem>
            <CategoryItem
              gradient={
                'radial(circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2%)'
              }
            >
              Design
            </CategoryItem>
            <CategoryItem
              gradient={
                'linear(109.6deg,  rgba(218,185,252,1) 11.2%, rgba(125,89,252,1) 91.1%)'
              }
            >
              Tools
            </CategoryItem>

            <GridItem colSpan={2} m={5}>
              <Center>
                <Button bgColor={'transparent'}>
                  Browse all categories{' '}
                  <Box>
                    <ChevronRightIcon />
                  </Box>
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
