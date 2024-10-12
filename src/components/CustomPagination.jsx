import React from "react";

const CustomPagination = ({ table }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  const handlePreviousPage = () => {
    if (canPreviousPage) {
      table.previousPage();
    }
  };

  const handleNextPage = () => {
    if (canNextPage) {
      table.nextPage();
    }
  };

  const handlePageClick = (pageNumber) => {
    table.setPageIndex(pageNumber);
  };

  return (
    <div className="flex justify-between items-center py-4">
      {/* Showing rows info */}
      <span className="text-sm text-gray-600">
        Showing {pageIndex * table.getState().pagination.pageSize + 1}
        -
        {Math.min(
          (pageIndex + 1) * table.getState().pagination.pageSize,
          table.getCoreRowModel().rows.length
        )}{" "}
        of {table.getCoreRowModel().rows.length}
      </span>

      {/* Pagination buttons */}
      <div className="flex space-x-2">
        {/* Previous Button */}
        <button
          onClick={handlePreviousPage}
          disabled={!canPreviousPage}
          className={`px-3 py-1 border rounded ${
            canPreviousPage
              ? "bg-white text-gray-600 hover:bg-gray-100"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {"<"}
        </button>

        {/* Page Numbers */}
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${
              pageIndex === i
                ? "bg-lime-200 text-gray-700 border-lime-300" // Active page style
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={!canNextPage}
          className={`px-3 py-1 border rounded ${
            canNextPage
              ? "bg-white text-gray-600 hover:bg-gray-100"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
