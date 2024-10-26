type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  emoji: string;
  id: string;
};

type PostItemProps = {
  post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <article className="flex flex-col items-start justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={`/posts/${post.slug}`}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.slug}
        </a>
      </div>
      <div className="flex items-center gap-x-4 mt-4">
        <div className="text-8xl">{post.emoji}</div>
        <div className="group relative flex-1">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={`/posts/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p
            className="mt-5 text-sm leading-6 text-gray-600 overflow-hidden text-ellipsis"
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {/*{post.content}*/}
          </p>
        </div>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={`/posts/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.slug}
            </a>
          </p>
          <p className="text-gray-600">{post.slug}</p>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
