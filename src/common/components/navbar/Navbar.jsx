import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
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
import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react';

import { Searchbar } from '../../UIElements';
import { Logo } from '../../../assets/images';
import SearchResultsDisplay from './SearchResultsDisplay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [isLessThan780px] = useMediaQuery('(min-width: 768px)');

  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const navColor = useColorModeValue('white', '#1A202C');

  const GET_SEARCH_ITEM = gql`
    query NavSearch($searchQuery: String) {
      posts(where: { _search: $searchQuery }, stage: PUBLISHED) {
        id
        title
        slug
      }
      snippets(where: { _search: $searchQuery }, stage: PUBLISHED) {
        id
        title
        slug
      }
      categories(where: { _search: $searchQuery }, stage: PUBLISHED) {
        id
        name
        slug
      }
    }
  `;

  const [getData, { data, loading, error }] = useLazyQuery(GET_SEARCH_ITEM, {
    variables: {
      searchQuery: searchQuery
    }
  });

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
    setIsOpen(true);
    getData();
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
            <Link tabIndex={-1}>
              <Image
                src={Logo}
                alt={'itsrakesh blog logo'}
                width={50}
                height={50}
                tabIndex={0}
              />
            </Link>
          </NextLink>
        </Center>

        {/* Searchbar */}
        {isLessThan780px && (
          <Center mx={5}>
            <Searchbar
              width={{ sm: '10rem', md: '25rem ' }}
              searchHandler={searchHandler}
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
      <SearchResultsDisplay
        queriedItems={data}
        loading={loading}
        error={error}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navbar;