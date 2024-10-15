import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="sticky top-0 z-40 flex bg-customG h-16 items-center px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={toggleSidebar}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      <header className="flex-1 flex justify-between items-center">
        {/* Add your content here */}
        Hello
      </header>
    </div>
  );
};

export default Header;
