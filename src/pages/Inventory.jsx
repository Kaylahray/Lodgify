import React from "react";
import TableHeader from "../components/TableHeader";
import { RxCaretSort } from "react-icons/rx";
import TableBody from "../components/TableBody";
const Inventory = () => {
  return (
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
        {people.map((person) => (
          <tr key={person.email}>
            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div className="flex items-center">
                <div className="h-11 w-11 flex-shrink-0">
                  <img
                    alt=""
                    src={person.image}
                    className="h-11 w-11 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    {person.name}
                  </div>
                  <div className="mt-1 text-gray-500">
                    {person.email}
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div className="text-gray-900">{person.title}</div>
              <div className="mt-1 text-gray-500">
                {person.department}
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Active
              </span>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              {person.role}
            </td>
            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit<span className="sr-only">, {person.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </TableBody>
    </table>
  );
};

export default Inventory;
