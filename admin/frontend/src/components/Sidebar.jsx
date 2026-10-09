import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { ImCross } from "react-icons/im";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  console.log(showSidebar);

  return (
    <aside
      className={`h-screen bg-black text-gray-400 w-60 px-2 py-10 z-101 transition-transform duration-300 ease-in-out flex
      sm:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"} flex-col justify-between fixed`}
    >
      <ImCross
        className="absolute top-8 right-8 sm:hidden"
        onClick={() => setShowSidebar(false)}
      />
      <div className="space-y-10">
        <div className="flex gap-4">
          <img src="/logo-icon.png" alt="" className="w-8" />
          <div className="leading-2">
            <h1 className="font-bold text-sm text-white">Superwheels</h1>
            <h2 className="text-gray-500 font-semibold text-xs">Autoparts</h2>
          </div>
        </div>
        <div
          className="flex flex-col [&>a]:py-2.5 [&>a]:hover:text-white [&>a]:hover:bg-white/10 [&>a]:px-3
        [&>a]:rounded-lg [&>a]:transition [&>a]:flex [&>a]:items-center [&>a]:gap-2"
        >
          <a href="#">
            <MdOutlineDashboard /> Overview
          </a>
          <a href="">
            <IoFileTrayStackedSharp /> Products
          </a>
          <a href="">
            <GoStack /> Categories
          </a>
          <a href="">
            <SiGoogleanalytics /> Analytics
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <a
          href=""
          className="py-2.5 hover:text-white hover:bg-white/10 px-3 rounded-lg w-full flex items-center gap-2 transition"
        >
          <CiSettings className="text-xl" />
          Settings
        </a>
        <div className="flex gap-4">
          <img src="/logo-icon.png" alt="" className="w-8" />
          <div className="leading-2">
            <h1 className="font-bold text-sm">Superwheels</h1>
            <h2 className="text-gray-500 font-semibold text-xs">Autoparts</h2>
          </div>
        </div>
      </div>
    </aside>
  );
}
