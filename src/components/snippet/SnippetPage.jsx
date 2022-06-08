import { Snippet, MoreSnippets } from './components';
import { Comment } from '../../common/components/misc';

const SnippetPage = ({ snippet, snippets }) => {
  return (
    <>
      <Snippet snippet={snippet} />
      <Comment />
      <MoreSnippets snippets={snippets} />
    </>
  );
};

export default SnippetPage;
