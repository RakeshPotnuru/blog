import {
  Avatar,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import Moment from 'react-moment';

const ExternalArticleCard = ({ article }) => {
  const textColor = useColorModeValue('text', '#fff');
  const shadow = useColorModeValue(
    'lg',
    'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  );

  return (
    <VStack my={10} p={4} borderRadius={'xl'} shadow={shadow} h={'max-content'}>
      {/* Featured image */}
      <Link href={article.url} tabIndex={-1} isExternal>
        <Image
          src={article.featuredImage}
          alt={article.title}
          htmlWidth={'100%'}
          htmlHeight={'auto'}
          rounded={'lg'}
          tabIndex={0}
        />
      </Link>

      {/* Website  */}
      <HStack py={2} w={'fit-content'}>
        <Avatar
          size={'xs'}
          name={article.domainName.split('.')[0]}
          src={article.logoUrl}
        />
        <Link href={`https://${article.domainName}`} isExternal>
          {article.domainName}
        </Link>
      </HStack>

      {/* Title */}
      <Link
        href={article.url}
        alignSelf={'flex-start'}
        _hover={{ color: 'brand.50' }}
        tabIndex={-1}
        isExternal
      >
        <Heading size={'md'} tabIndex={0}>
          {article.title}
        </Heading>
      </Link>

      {/* Description */}
      <Text color={textColor} alignSelf={'flex-start'}>
        {article.description}
      </Text>

      {/* Published Date */}
      <Text alignSelf={'flex-start'} fontWeight={'medium'}>
        <Moment format="MMM DD, YYYY">{article.publishedDate}</Moment>
      </Text>
    </VStack>
  );
};

export default ExternalArticleCard;
