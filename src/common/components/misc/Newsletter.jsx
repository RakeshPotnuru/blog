import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
  SimpleGrid,
  Divider
} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Newsletter = () => {
  return (
    <Box
      id={'newsletter'}
      p={{ base: 10, md: 20 }}
      mt={5}
      bgGradient={
        'linear( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% )'
      }
    >
      <Center color={'white'}>
        <VStack>
          <Heading mb={4} textAlign={['center', null]}>
            Subscribe to Newsletter
            <Center>
              <Box my={2} w={'40%'} h={'5px'} bg={'brand.300'} />
            </Center>
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={4} w={[null, '70%']}>
            <Box>
              <Center>
                <Heading size={'md'}>Weekly</Heading>
              </Center>
              <Divider my={2} />
              <List spacing={4} my={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  Never miss an update.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  Get articles and snippets directly to your inbox.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  Subscribe to stay connected and avoid getting lost among
                  millions of websites.
                </ListItem>
              </List>
            </Box>
            <Box>
              <Center>
                <Heading size={'md'}>Monthly</Heading>
              </Center>
              <Divider my={2} />
              <List spacing={4} my={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  Coming soon...
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>

          <Link href={process.env.NEXT_PUBLIC_SUBSTACK_URL} isExternal>
            <Button
              rightIcon={<ChevronRightIcon />}
              bg={'brand.300'}
              color={'black'}
              _hover={{ bg: 'brand.300', opacity: 0.8 }}
              _active={{ bg: 'brand.300', opacity: 0.8 }}
            >
              Subscribe Now
            </Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default Newsletter;
