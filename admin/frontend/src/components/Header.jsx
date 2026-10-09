import { IoMdAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ setShowSidebar }) {
  return (
    <nav className="flex justify-between fixed w-full sm:w-[calc(100%-240px)] p-5 backdrop-blur-sm z-100 shadow-lg">
      <div className="flex items-center gap-5">
        <GiHamburgerMenu
          className="sm:hidden text-xl"
          onClick={() => setShowSidebar(true)}
        />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <button className="flex items-center gap-2 bg-primary px-4 rounded-lg py-1.5 h-fit">
        <IoMdAdd /> Add product
      </button>
    </nav>
  );
}
