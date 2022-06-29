import { Box, Code, useMediaQuery } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CustomCode = ({ node, inline, className, children, ...props }) => {
  const [isLessThan780px] = useMediaQuery('(max-width: 780px)');
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      style={dracula}
      language={match[1]}
      PreTag={Box}
      wrapLongLines={isLessThan780px}
      showLineNumbers={match[1] !== 'bash' && !isLessThan780px}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <Code maxW={isLessThan780px && '15rem'} borderRadius={'md'} {...props}>
      {children}
    </Code>
  );
};

export default CustomCode;
