// components/Sidebar.tsx

type SidebarProps = {
  categories: string[];
  allPosts: {
    id: string;
    slug: string;
    date: string;
    title: string;
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({ categories, allPosts }) => {
  return (
    <div className="w-1/4 pl-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">カテゴリ</h2>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <a
                href={`#${category}`}
                className="text-blue-500 hover:underline"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-lg font-semibold mb-4">最新記事</h2>
        <ul>
          {allPosts.map((post) => (
            <li key={post.id} className="mb-2">
              <a
                href={`/posts/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                {post.date} - {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
