import { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
  CircularProgress,
  SimpleGrid
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { ErrorBox } from '../../UIElements';

const Newsletter = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscriptionError, setIsSubscriptionError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    const res = await fetch(`/api/revue`, {
      body: JSON.stringify({
        email: e.target.email.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setIsSubscriptionError(true);
      setIsSubscribing(false);
      setMessage(
        'Your e-mail address is invalid or you are already subscribed!'
      );
      return;
    }

    setIsSubscriptionError(false);
    setIsSubscribing(false);
    setMessage('Success! 🎉 You are now subscribed.');
  };

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
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={4} w={[null, '70%']}>
            <Box>
              <Center>
                <Heading size={'md'}>Weekly</Heading>
              </Center>
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
              <Text>Coming soon...</Text>
            </Box>
          </SimpleGrid>

          <Box w={['100%', '50%']} py={4}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    id={'email'}
                    type={'email'}
                    name={'email'}
                    placeholder={'Your email address*'}
                    _placeholder={{ color: 'white' }}
                    borderColor={'white'}
                    disabled={isSubscribing}
                  />
                  <InputRightElement w={'7rem'}>
                    <Button
                      type={'submit'}
                      name={'subscribe'}
                      size={'sm'}
                      bg={'brand.400'}
                      _hover={{ bg: 'brand.400', opacity: 0.8 }}
                      _active={{ bg: 'brand.400', opacity: 0.8 }}
                      disabled={isSubscribing}
                    >
                      {isSubscribing ? (
                        <CircularProgress
                          isIndeterminate
                          size={6}
                          color={'brand.50'}
                        />
                      ) : (
                        'Subscribe'
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {isSubscriptionError ? (
                <Box my={2} width={'fit-content'}>
                  <ErrorBox error={message} />
                </Box>
              ) : (
                <Box my={2} fontSize={'small'} color={'green.300'}>
                  {message}
                </Box>
              )}

              <Box fontSize={'small'} my={2}>
                By subscribing, you agree with Revue&apos;s{' '}
                <Link href={'https://www.getrevue.co/terms'} isExternal>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href={'https://www.getrevue.co/privacy'} isExternal>
                  Privacy Policy
                </Link>
                .
              </Box>
            </form>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default Newsletter;
