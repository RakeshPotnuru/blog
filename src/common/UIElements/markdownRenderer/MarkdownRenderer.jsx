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
  const [isLessThan660px] = useMediaQuery('(max-width: 660px)');
  const [isLessThan560px] = useMediaQuery('(max-width: 590px)');
  const [isLessThan520px] = useMediaQuery('(max-width: 520px)');
  const [isLessThan460px] = useMediaQuery('(max-width: 460px)');
  const [isLessThan410px] = useMediaQuery('(max-width: 410px)');
  const [isLessThan360px] = useMediaQuery('(max-width: 360px)');
  const [isLessThan280px] = useMediaQuery('(max-width: 280px)');

  return (
    <Container
      maxW={
        isLessThan280px
          ? '40%'
          : isLessThan360px
          ? '50%'
          : isLessThan410px
          ? '55%'
          : isLessThan460px
          ? '65%'
          : isLessThan520px
          ? '75%'
          : isLessThan560px
          ? '85%'
          : isLessThan660px
          ? '95%'
          : 'container.md'
      }
    >
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
