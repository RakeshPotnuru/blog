import { Center } from '@chakra-ui/react';

import { ErrorBox } from '../../common/UIElements';
import { Snippet, MoreSnippets } from './components';
import { Comment } from '../../common/components/misc';

const SnippetPage = ({ snippet, snippets, error }) => {
  return (
    <>
      {error ? (
        <Center>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Snippet snippet={snippet} />
          <Comment />
          <MoreSnippets snippets={snippets} />
        </>
      )}
    </>
  );
};

export default SnippetPage;
