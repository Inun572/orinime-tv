const Pagination = ({ paginate, pageDown, pageUp }) => {
  const totalPage = paginate?.last_visible_page;
  const currentPage = paginate?.current_page;
  const hasNextPage = paginate?.has_next_page;

  return (
    <div className="text-color-primary flex justify-center items-center p-4 gap-4 text-lg">
      {currentPage > 1 ? (
        <button
          onClick={pageDown}
          className="transition-all hover:text-color-secondary"
        >
          Prev
        </button>
      ) : null}
      <p>
        {currentPage} of {totalPage}
      </p>
      {hasNextPage ? (
        <button
          onClick={pageUp}
          className="transition-all hover:text-color-secondary"
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
