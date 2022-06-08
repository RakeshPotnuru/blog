import { Post, MoreArticles } from './components';
import { Comment } from '../../common/components/misc';

const PostPage = ({ post, posts }) => {
  return (
    <>
      <Post post={post} />
      <Comment />
      <MoreArticles posts={posts} />
    </>
  );
};

export default PostPage;
