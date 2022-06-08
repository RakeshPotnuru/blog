import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
  CircularProgress
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscriptionError, setIsSubscriptionError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target;
    console.log(email.value);
    setIsSubscribing(true);
    setIsSubscriptionError(false);
    const response = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/' +
        'ff9f8f9f-9f9f-9f9f-9f9f-9f9f9f9f9f9',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('user:pass')
        }
      }
    );
    const data = await response.json();
    if (data.status === 'success') {
      setIsSubscribed(true);
      setIsSubscribing(false);
    } else {
      setIsSubscriptionError(true);
      setIsSubscribing(false);
    }
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
          <Heading mb={4}>Subscribe to Newsletter</Heading>
          <List spacing={4}>
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
              Subscribe to stay connected and avoid getting lost among millions
              of websites.
            </ListItem>
          </List>
          <Box w={'100%'} py={4}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    id={'email'}
                    type={'email'}
                    name={'email'}
                    placeholder="Your email address*"
                    _placeholder={{ color: 'white' }}
                  />
                  <InputRightElement w={'7rem'}>
                    <Button
                      type={'submit'}
                      name={'subscribe'}
                      size={'sm'}
                      bg={'brand.400'}
                      _hover={{}}
                      _visited={{}}
                      _active={{}}
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
