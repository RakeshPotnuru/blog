import {
  Container,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useMediaQuery
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { CustomCode } from './';

const MarkdownRenderer = ({ content }) => {
  const [isLessThan780px] = useMediaQuery('(max-width: 780px)');

  return (
    <Container maxW={'container.md'}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: Heading,
          h2: (props) => <Heading my={6} size="lg" {...props} />,
          h3: (props) => <Heading my={4} size="md" {...props} />,
          p: (props) => <Text my={4} color={'textColor'} {...props} />,
          ul: (props) => <UnorderedList my={4} {...props} />,
          ol: (props) => <OrderedList my={4} {...props} />,
          li: ListItem,
          hr: Divider,
          a: (props) => (
            <Link href={props.href} color={'brand.50'} isExternal>
              {props.children}
            </Link>
          ),
          img: (props) => (
            <Image
              my={8}
              shadow={'lg'}
              htmlWidth={'100%'}
              htmlHeight={'auto'}
              src={props.src}
              alt={props.alt}
              {...props}
            />
          ),
          code: CustomCode,
          table: (props) => (
            <TableContainer
              w={isLessThan780px && '17rem'}
              overflowX={'scroll'}
              whiteSpace={'pre-wrap'}
            >
              <Table my={4} variant="striped" colorScheme={'gray'} {...props} />
            </TableContainer>
          ),
          thead: Thead,
          tr: Tr,
          th: Th,
          tbody: Tbody
        }}
      >
        {content}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkdownRenderer;
