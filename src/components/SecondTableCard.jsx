import React from "react";
import SearchBar from "./SearchBar";
import SelectButtonIcon from "./SelectButtonIcon";
import Button from "./Button";
import SelectButton from "./SelectButton";
const SecondTableCard = ({
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
  normalSelect,
  normalSelectText,
  secondNormalSelect,
  secondNormalSelectText,
  thirdNormalSelect,
  thirdNormalSelectText,
  repeatFunnel,
  repeatFunnel2,
  repeatFunnelText,
  repeatFunnel2Text,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
}) => {
  return (
    <div className="flex flex-col p-4 items-start gap-4 flex-1 bg-white rounded-lg">
      <div className="flex justify-between gap-2 items-center">
        <div>
          {search && <SearchBar placeholder="Search for guests," />}
        </div>
        <div>
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
          {repeatFunnel && (
            <SelectButtonIcon
              funnel={true}
              bg={color3}
              title={repeatFunnelText}
            />
          )}
          {repeatFunnel2 && (
            <SelectButtonIcon
              funnel={true}
              bg={color4}
              title={repeatFunnel2Text}
            />
          )}
          {normalSelect && (
            <SelectButton
              text={normalSelectText}
              first={first}
              bg={color5}
            />
          )}
          {secondNormalSelect && (
            <SelectButton
              text={secondNormalSelectText}
              second={second}
              bg={color6}
            />
          )}
          {thirdNormalSelect && (
            <SelectButton
              text={thirdNormalSelectText}
              third={third}
              bg={color7}
            />
          )}
          {btn && <Button title={btnTitle} />}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SecondTableCard;
