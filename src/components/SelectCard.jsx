import React from "react";
import SelectButton from "./SelectButton";
import SelectButtonIcon from "./SelectButtonIcon";

const SelectCard = ({
  title,
  children,
  normalSelectText,
  first,
  selectDoubleIcon2,
  selectDoubleIconTitle2,
  color2,
  color3,
  normalSelect,
}) => {
  return (
    <div className="flex p-4 flex-col items-start gap-4 rounded-xl bg-white">
      <div className=" flex items-center justify-between w-full">
        <p className="text-[16px] font-medium leading-[125%] text-customBlack">
          {title}
        </p>
        {normalSelect && (
          <SelectButton
            text={normalSelectText}
            first={first}
            bg={color3}
          />
        )}
        {selectDoubleIcon2 && (
          <SelectButtonIcon
            calender={true}
            bg={color2}
            title={selectDoubleIconTitle2}
          />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SelectCard;
