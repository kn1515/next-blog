// components/Pagination.tsx

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPosts / postsPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="flex justify-center mt-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => paginate(number)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
