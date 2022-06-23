import { Center } from '@chakra-ui/react';

import { Post, MoreArticles } from './components';
import { Comment } from '../../common/components/misc';
import { ErrorBox } from '../../common/UIElements';

const PostPage = ({ post, posts, loading, error }) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Post post={post} loading={loading} error={error} />
          <Comment />
          <MoreArticles posts={posts} />
        </>
      )}
    </>
  );
};

export default PostPage;
