import React from "react";
import { Search } from "../assets/assets";
const SearchBar = ({
  placeholder = "Search",
  value,
  onChange,
  bg = "customG",
}) => {
  return (
    <div
      className={`flex w-full max-w-[223px] px-2 items-center gap-[6px] rounded-md bg-${bg}`}
    >
      <Search />
      <input
        id="search"
        name="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" text-[#A3A3A3] bg-transparent w-full outline-none py-[6px] font-lato text-[11px] font-normal leading-[1.4]"
      />
    </div>
  );
};

export default SearchBar;
