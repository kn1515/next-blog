type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  loadMore: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  loadMore,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="flex justify-center mt-8">
      {currentPage < totalPages && (
        <button
          type="button"
          onClick={loadMore}
          className="mx-1 px-3 py-1 rounded bg-blue-500 text-white"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Pagination;
