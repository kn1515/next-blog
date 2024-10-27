import PostItem from "@/components/post-item";
import Pagination from "@/components/pagination";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  emoji: string;
  id: string;
};

type PostListProps = {
  posts: Post[];
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  loadMore: () => void;
};

const PostList: React.FC<PostListProps> = ({
  posts,
  totalPosts,
  postsPerPage,
  currentPage,
  loadMore,
}) => {
  return (
    <>
      <div
        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t 
        border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1"
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        loadMore={loadMore}
      />
    </>
  );
};

export default PostList;
