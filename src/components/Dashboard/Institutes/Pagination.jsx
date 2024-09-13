const Pagination = ({
  currPage,
  totalPages,
  itemsPerPage,
  inputPage,
  setItemsPerPage,
  setCurrPage,
  handlePageInputChange,
  handleGoToPage,
  nextPage,
  prevPage,
}) => (
  <div className="flex flex-col xl:flex-row justify-between items-center gap-4 mt-4">
    <div className="flex items-center">
      <span className="mr-2 text-sm text-gray-500 font-semibold">
        Rows per page:
      </span>
      <select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
        className="border rounded-md px-2 py-1 text-sm text-gray-500 font-semibold"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
    <div className="flex items-center">
      <button
        onClick={prevPage}
        disabled={currPage === 1}
        className="min-w-20 px-4 py-1 text-gray-500 text-sm font-semibold border rounded-md bg-white cursor-pointer hover:bg-slate-100"
      >
        Previous
      </button>
      <span className="mx-2 lg:mx-4 text-gray-500 text-sm font-semibold">
        Page {currPage} of {totalPages}
      </span>
      <button
        onClick={nextPage}
        disabled={currPage === totalPages}
        className="min-w-20 px-4 py-1 text-gray-500 text-sm font-semibold border rounded-md bg-white cursor-pointer hover:bg-slate-100"
      >
        Next
      </button>
    </div>
    <div className="flex items-center">
      <input
        type="number"
        placeholder="Go to page"
        value={inputPage}
        onChange={handlePageInputChange}
        className="border rounded-md px-2 py-1 mr-4"
      />
      <button
        onClick={handleGoToPage}
        className="px-4 py-1 border rounded-md bg-white hover:bg-slate-100"
      >
        Go
      </button>
    </div>
  </div>
);

export default Pagination;
