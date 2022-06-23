import { Center } from '@chakra-ui/react';

import { Snippet, MoreSnippets } from './components';
import { Comment } from '../../common/components/misc';
import { ErrorBox } from '../../common/UIElements';

const SnippetPage = ({ snippet, snippets, loading, error }) => {
  return (
    <>
      {error ? (
        <Center>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Snippet snippet={snippet} loading={loading} />
          <Comment />
          <MoreSnippets snippets={snippets} loading={loading} />
        </>
      )}
    </>
  );
};

export default SnippetPage;
