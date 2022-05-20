import {
  Box,
  Heading,
  VStack,
  HStack,
  IconButton,
  Icon,
  Spacer,
  Wrap,
  WrapItem,
  List,
  ListItem
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box id={'footer'} p={20} bg={'black'} color={'white'}>
      <Wrap>
        <WrapItem>
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
        </WrapItem>
        <Spacer />
        <WrapItem>
          <VStack>
            <Heading size={'sm'}>QUICK LINKS</Heading>
            <List fontSize={'small'} alignSelf={'flex-start'}>
              <ListItem>About</ListItem>
              <ListItem>External Articles</ListItem>
              <ListItem>Status</ListItem>
              <ListItem>Newsletter</ListItem>
              <ListItem>Support Me</ListItem>
            </List>
          </VStack>
        </WrapItem>
        <Spacer />
        <WrapItem>
          <VStack>
            <Heading size={'sm'}>LEGAL</Heading>
            <List fontSize={'small'} alignSelf={'flex-start'}>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Cookies</ListItem>
              <ListItem>Terms & Conditions</ListItem>
            </List>
          </VStack>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Footer;
