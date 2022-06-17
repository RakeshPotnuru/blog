import { Snippet, MoreSnippets } from './components';
import { Comment } from '../../common/components/misc';

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
