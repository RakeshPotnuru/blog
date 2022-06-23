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
import { Link } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box id={'footer'} p={{ base: 10, md: 20 }} bg={'black'} color={'white'}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <VStack>
          <Heading fontFamily={'Poppins'}>itsrakesh</Heading>
          <HStack spacing={2}>
            <Link href={'https://twitter.com/rakesh_at_tweet'} isExternal>
              <IconButton
                aria-label="twitter"
                bg={'transparent'}
                _hover={{ bg: 'transparent', color: 'twitter' }}
                _active={{ bg: 'transparent', color: 'twitter' }}
                _visited={{ bg: 'transparent', color: 'twitter' }}
                icon={<Icon as={FaTwitter} w={6} h={6} />}
              />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/itsrakeshdotco'}
              isExternal
            >
              <IconButton
                aria-label="linkedin"
                bg={'transparent'}
                _hover={{ bg: 'transparent', color: 'linkedin' }}
                _active={{ bg: 'transparent', color: 'linkedin' }}
                _visited={{ bg: 'transparent', color: 'linkedin' }}
                icon={<Icon as={FaLinkedin} w={6} h={6} />}
              />
            </Link>
            <Link href={'https://github.com/RakeshPotnuru'} isExternal>
              <IconButton
                aria-label="github"
                bg={'transparent'}
                _hover={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                _active={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                _visited={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                icon={<Icon as={FaGithub} w={6} h={6} />}
              />
            </Link>
            <Link href={'https://www.instagram.com/rakesh_at_insta'} isExternal>
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
            </Link>
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
              <ListItem>
                <Link href={'https://itsrakesh.co/about'} isExternal>
                  About
                </Link>
              </ListItem>
              {/* <ListItem>External Articles</ListItem> */}
              <ListItem>
                <Link href="https://status.itsrakesh.co" isExternal>
                  Status
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'https://newsletter.itsrakesh.co'} isExternal>
                  Newsletter
                </Link>
              </ListItem>
              <ListItem>
                <Link href={'/support-me'}>Support Me </Link>❤️
              </ListItem>
            </List>
          </VStack>

          <Spacer />

          <VStack>
            <Heading size={'sm'} alignSelf={'flex-start'}>
              LEGAL
            </Heading>
            <List fontSize={'small'} alignSelf={'flex-start'}>
              <ListItem>
                <Link href={'/legal/privacy-policy'}>Privacy Policy</Link>
              </ListItem>
              <ListItem>
                <Link href={'/legal/cookie-policy'}>Cookie Policy</Link>
              </ListItem>
              <ListItem>
                <Link href={'/legal/terms-and-conditions'}>
                  Terms &amp; Conditions
                </Link>
              </ListItem>
            </List>
          </VStack>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
