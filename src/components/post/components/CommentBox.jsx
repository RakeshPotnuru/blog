import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Giscus from '@giscus/react';

const CommentBox = () => {
  const giscusTheme = useColorModeValue('light', 'dark');

  return (
    <Container maxW={'container.sm'} my={10}>
      <Heading size={'md'}>LEAVE A COMMENT OR START A DISCUSSION</Heading>
      <Box my={10}>
        <Giscus
          repo="RakeshPotnuru/Blog"
          repoId="R_kgDOHSxmrw"
          category="Comments"
          categoryId="DIC_kwDOHSxmr84CO-Dj"
          mapping="url"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
        />
      </Box>
    </Container>
  );
};

export default CommentBox;
