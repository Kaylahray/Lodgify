import React from "react";
import SearchBar from "./SearchBar";
import SelectButtonIcon from "./SelectButtonIcon";
import Button from "./Button";
import SelectButton from "./SelectButton";
const TableCard = ({
  children,
  search,
  selectDoubleIcon,
  selectDoubleIcon2,
  selectDoubleIconTitle2,
  selectDoubleIconTitle,
  btn,
  btnTitle,
  first,
  second,
  third,
  title,
  normalSelect,
  normalSelectText,
  secondNormalSelect,
  secondNormalSelectText,
  thirdNormalSelect,
  thirdNormalSelectText,
  color1,
  color2,
  color3,
  color4,
  color5,
}) => {
  return (
    <div className="flex flex-col p-4 items-start gap-4 flex-1 bg-white rounded-lg">
      <div className="flex justify-between items-center bg-green-200 w-full">
        <p>{title}</p>
        <div className="flex justify-between gap-2 items-center">
          {search && <SearchBar placeholder="Search for guests," />}
          {selectDoubleIcon && (
            <SelectButtonIcon
              funnel={true}
              bg={color1}
              title={selectDoubleIconTitle}
            />
          )}
          {selectDoubleIcon2 && (
            <SelectButtonIcon
              calender={true}
              bg={color2}
              title={selectDoubleIconTitle2}
            />
          )}
          {btn && <Button title={btnTitle} />}
          {normalSelect && (
            <SelectButton
              text={normalSelectText}
              first={first}
              bg={color3}
            />
          )}
          {secondNormalSelect && (
            <SelectButton
              text={secondNormalSelectText}
              second={second}
              bg={color4}
            />
          )}
          {thirdNormalSelect && (
            <SelectButton
              text={thirdNormalSelectText}
              third={third}
              bg={color5}
            />
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TableCard;
