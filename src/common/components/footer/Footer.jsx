import {
  Box,
  Heading,
  VStack,
  HStack,
  IconButton,
  Icon,
  Spacer,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box id={'footer'} p={{ base: 10, md: 20 }} bg={'black'} color={'white'}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <VStack>
          <Heading fontFamily={'Poppins'}>itsrakesh</Heading>
          <HStack spacing={2}>
            <IconButton
              aria-label="twitter"
              bg={'transparent'}
              _hover={{ bg: 'transparent', color: 'twitter' }}
              _active={{ bg: 'transparent', color: 'twitter' }}
              _visited={{ bg: 'transparent', color: 'twitter' }}
              icon={<Icon as={FaTwitter} w={6} h={6} />}
            />
            <IconButton
              aria-label="linkedin"
              bg={'transparent'}
              _hover={{ bg: 'transparent', color: 'linkedin' }}
              _active={{ bg: 'transparent', color: 'linkedin' }}
              _visited={{ bg: 'transparent', color: 'linkedin' }}
              icon={<Icon as={FaLinkedin} w={6} h={6} />}
            />
            <IconButton
              aria-label="facebook"
              bg={'transparent'}
              _hover={{ bg: 'transparent', color: 'facebook' }}
              _active={{ bg: 'transparent', color: 'facebook' }}
              _visited={{ bg: 'transparent', color: 'facebook' }}
              icon={<Icon as={FaFacebook} w={6} h={6} />}
            />
            <IconButton
              aria-label="instagram"
              bg={'transparent'}
              _hover={{
                bg: 'transparent',
                color: 'brand.100'
              }}
              _active={{
                bg: 'transparent',
                color: 'brand.100'
              }}
              _visited={{
                bg: 'transparent',
                color: 'brand.100'
              }}
              icon={<Icon as={FaInstagram} w={6} h={6} />}
            />
          </HStack>
        </VStack>

        <Spacer />

        <SimpleGrid columns={3} mt={{ base: 4, md: 0 }}>
          <VStack>
            <Heading size={'sm'} alignSelf={'flex-start'} whiteSpace={'nowrap'}>
              QUICK LINKS
            </Heading>
            <List
              fontSize={'small'}
              alignSelf={'flex-start'}
              whiteSpace={'nowrap'}
            >
              <ListItem>About</ListItem>
              <ListItem>External Articles</ListItem>
              <ListItem>Status</ListItem>
              <ListItem>Newsletter</ListItem>
              <ListItem>Support Me</ListItem>
            </List>
          </VStack>

          <Spacer />

          <VStack>
            <Heading size={'sm'} alignSelf={'flex-start'}>
              LEGAL
            </Heading>
            <List fontSize={'small'} alignSelf={'flex-start'}>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Cookies</ListItem>
              <ListItem>Terms &amp; Conditions</ListItem>
            </List>
          </VStack>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
