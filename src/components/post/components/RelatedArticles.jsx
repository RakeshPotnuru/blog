import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';

const RelatedArticles = () => {
  return (
    <Container maxW={'container.sm'} my={20}>
      <Heading size={'md'}>RELATED ARTICLES</Heading>
      <Flex direction={{ base: 'column', md: 'row' }} my={4} gap={6}>
        <Image
          src="https://picsum.photos/id/242/220/80"
          alt="something"
          rounded={'md'}
        />
        <VStack>
          <Heading size={'md'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quos quisquam quisquam Lorem ipsum dolor sit amet consectetur.
          </Text>
        </VStack>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} my={4} gap={6}>
        <Image
          src="https://picsum.photos/id/242/220/80"
          alt="something"
          rounded={'md'}
        />
        <VStack>
          <Heading size={'md'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quos quisquam quisquam Lorem ipsum dolor sit amet consectetur.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default RelatedArticles;
