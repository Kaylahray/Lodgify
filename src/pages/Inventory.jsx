import React, { useState } from "react";
import TableHeader from "../components/TableHeader";
import { RxCaretSort } from "react-icons/rx";
import TableBody from "../components/TableBody";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Paginate from "../components/Paginate";
const Inventory = () => {
  const fetchTableData = (pageId) => {
    return axios.get(
      `http://localhost:8000/data?_limit=10&_page=${pageId}`
    );
  };
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["inventory", page],
    queryFn: () => fetchTableData(page),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
        <TableHeader>
          <th>
            <span className="pr-1">Item</span>
            <RxCaretSort className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1"> Category</span>

            <RxCaretSort className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Availability</span>
            <RxCaretSort className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Quantity in Stock</span>
            <RxCaretSort className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Quantity in reorder</span>
            <RxCaretSort className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Action</span>
            <RxCaretSort className="inline text-sm" />
          </th>
        </TableHeader>
        <TableBody>
          {data?.data.map((tableitem) => {
            const {
              item,
              category,
              availability,
              quantity_in_stock,
              quantity_in_reorder,
              actions,
            } = tableitem;
            return (
              <tr key={item.name}>
                <td
                  scope="col"
                  className="relative px-7 py-6 sm:w-12 sm:px-6 rounded-tr-none rounded-t-lg"
                >
                  <input
                    type="checkbox"
                    className={`absolute left-4 top-1/2 -mt-2 h-4 w-4  rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600 `}
                  />
                </td>

                <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="flex items-center">
                    <div className="h-11 w-11 flex-shrink-0">
                      <img
                        alt=""
                        className="h-11 w-11 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div className="text-gray-900">{category}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span
                    className={`inline-flex items-center rounded-sm px-2 py-1 text-xs font-medium  
                    ${
                      availability === "Available"
                        ? "bg-[#F3FBC7]"
                        : availability === "Low"
                        ? "bg-[#D5F6E5]"
                        : "bg-[#FEE]"
                    }`}
                  >
                    {availability}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  {quantity_in_stock}
                </td>
                <td className="whitespace-nowrap py-5 pl-3 pr-4 text-sm font-medium sm:pr-0">
                  {quantity_in_reorder}
                </td>
                <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="flex items-center">
                    <div>
                      <span className="inline-flex items-center rounded-md bg-green-50  text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {actions.view_detail}
                      </span>
                    </div>
                    <div className="ml-2 font-medium text-gray-900">
                      {actions.reorder}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </TableBody>
      </table>
      <Paginate page={page} setPage={setPage} />
    </>
  );
};

export default Inventory;
