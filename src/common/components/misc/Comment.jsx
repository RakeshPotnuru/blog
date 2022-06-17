import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Giscus from '@giscus/react';

const CommentBox = () => {
  const giscusTheme = useColorModeValue('light', 'dark');

  return (
    <Container maxW={'container.md'} my={10}>
      <Heading size={'md'}>LEAVE A COMMENT OR START A DISCUSSION</Heading>
      <Box my={10}>
        <Giscus
          repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
          category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
          categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
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
