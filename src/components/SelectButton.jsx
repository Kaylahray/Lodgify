import { CaretDown } from "../assets/assets";

const SelectButton = ({ second, first, text, third }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("Last 7 Days");

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };
  return (
    <div className="relative inline-block text-left">
      <button
        // onClick={toggleDropdown}
        className="flex items-center gap-[2px] px-1.5 py-2 bg-customYellow text-[12px] font-semibold leading-[110%] tracking-[0.12px] rounded-md focus:outline-none"
      >
        {first && text}
        {second && text}
        {third && text}
        <CaretDown />
      </button>

      {/* {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionSelect("Last 7 Days")}
            >
              Last 7 Days
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionSelect("Last 30 Days")}
            >
              Last 30 Days
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default SelectButton;
