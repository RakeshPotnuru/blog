import { CommentBox, Post } from './components';
import RelatedArticles from './components/RelatedArticles';

const PostPage = () => {
  return (
    <>
      <Post />
      <CommentBox />
      <RelatedArticles />
    </>
  );
};

export default PostPage;
