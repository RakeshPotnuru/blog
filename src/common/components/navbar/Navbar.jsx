import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Link,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  SkeletonText,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { Searchbar } from '../../UIElements';
import { Logo } from '../../../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLessThan780px] = useMediaQuery('(min-width: 768px)');

  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const navColor = useColorModeValue('white', '#1A202C');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log('Searching...');
  };

  return (
    <>
      <Flex
        py={3}
        px={[5, 20, 20]}
        bg={navColor}
        boxShadow={'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'}
        backdropFilter={'blur(40px)'}
        as={'nav'}
        align={'center'}
        justify={'space-between'}
        pos={'sticky'}
        top={0}
        zIndex={9999}
      >
        {/* Logo */}
        <Center cursor={'pointer'}>
          <NextLink href={'/'} passHref>
            <Link>
              <Image
                src={Logo}
                alt={'itsrakesh blog logo'}
                width={50}
                height={50}
              />
            </Link>
          </NextLink>
        </Center>

        {/* Searchbar */}
        {isLessThan780px && (
          <Center mx={5}>
            <Searchbar
              width={{ sm: '10rem', md: '25rem ' }}
              onSubmit={handleSubmit}
            />
          </Center>
        )}

        {/* Toggle Color Mode (Light/Dark) */}
        <Center>
          <IconButton
            aria-label={'Switch colormode'}
            onClick={toggleColorMode}
            icon={toggleIcon}
          />
        </Center>
      </Flex>

      {/* Popover for search results */}
      {isLessThan780px && (
        <Box pos={'fixed'} zIndex={9999}>
          <Popover
            placement={'bottom'}
            isOpen={isOpen}
            trigger={'click'}
            isLazy
          >
            <PopoverContent w={'100vw'} h={'100vh'}>
              <PopoverCloseButton onClick={() => setIsOpen(false)} />
              <Center>
                <HStack>
                  <VStack>
                    <PopoverHeader>Articles</PopoverHeader>
                    <SkeletonText w={'17rem'} h={'100vh'} noOfLines={5}>
                      <PopoverBody>
                        Nothing in
                        articlesssssssssssssssssssdbfebfebebbtrbrtbtbtrbtr
                      </PopoverBody>
                    </SkeletonText>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Snippets</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
                      Nothing in snippets
                    </PopoverBody>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Categories</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
                      Nothing in categories
                    </PopoverBody>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Tags</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
                      Nothing in tags
                    </PopoverBody>
                  </VStack>
                </HStack>
              </Center>
            </PopoverContent>
          </Popover>
        </Box>
      )}
    </>
  );
};

export default Navbar;
