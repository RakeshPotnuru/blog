import { Center, Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

import { Searchbar } from '../../UIElements';
import { Logo } from '../../../assets/images';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const navColor = useColorModeValue('white', '#1A202C');

  return (
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
      <Center cursor={'pointer'}>
        <Link href={'/'} passHref>
          <Image
            src={Logo}
            alt={'itsrakesh blog logo'}
            width={50}
            height={50}
          />
        </Link>
      </Center>
      <Center mx={5}>
        <Searchbar width={{ sm: '10rem', md: '25rem ' }} />
      </Center>
      <Center>
        <IconButton
          aria-label={'Switch colormode'}
          onClick={toggleColorMode}
          icon={toggleIcon}
        />
      </Center>
    </Flex>
  );
};

export default Navbar;
