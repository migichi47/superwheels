import { BiSearch } from "react-icons/bi";
import { Button } from "./Button";
import { FiFilter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="sticky flex items-center md:top-15 top-12 border-b-3 border-primary/50 z-100 bg-white py-3">
      <GiHamburgerMenu className="block lg:hidden relative mx-5" />
      <div className="flex w-fit mx-auto gap-10 items-center">
        <div className="h-full flex relative group">
          <div
            className="flex py-2 px-4 rounded-md gap-10 bg-linear-to-b hover:from-primary hover:to-primary/0 transition-colors cursor-pointer from-gray-300 to-gray-100 items-center"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="text-[12px] sm:text-sm">All Categories</span>
            <FiFilter />
          </div>
          <ul
            className={`absolute text-gray-700 top-9 rounded-b-lg lg:hidden ${showMenu ? "block" : "hidden"} [&>li]:py-1 [&>li]:hover:bg-primary bg-white shadow-lg h-fit w-46 [&>li]:pl-4 [&>li]:border-gray-300 [&>li]:cursor-pointer [&>li]:pr-2 [&>li]:border-b lg:group-hover:block lg:group-hover:opacity-100 transition-all duration-1000`}
          >
            <li onClick={() => setShowMenu(false)}>Side Mirrors</li>
            <li onClick={() => setShowMenu(false)}>Doors</li>
            <li onClick={() => setShowMenu(false)}>Bonnets</li>
            <li onClick={() => setShowMenu(false)}>Wind Breakers</li>
            <li onClick={() => setShowMenu(false)}>Nose cuts</li>
            <li onClick={() => setShowMenu(false)}>Headlights</li>
            <li onClick={() => setShowMenu(false)}>Fog lights</li>
            <li onClick={() => setShowMenu(false)}>Bumpers</li>
            <li onClick={() => setShowMenu(false)}>Tail lights</li>
            <li className="border-none">Fenders/wing</li>
          </ul>
        </div>
        <div className="text-xs [&>a]:hover:bg-primary hidden lg:flex [&>a]:flex [&>a]:items-center h-10 [&>a]:px-2 [&>a]:rounded-t-lg [&>a]:hover:text-white [&>a]:transition-colors">
          <a href="#">HOME</a>
          <a href="#">SHOP</a>
          <a href="#">ABOUT US</a>
          <a href="#">BLOGS</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="flex gap-2 grow">
          <input
            type="text"
            placeholder="search for products"
            className="border-2 border-gray-300 rounded-sm grow py-3 text-xs pl-4 text-gray-700 max-w-100 outline-primary"
          />
          <Button className={"hover:bg-primary/50 px-4"}>
            <BiSearch />
          </Button>
        </div>
      </div>
    </div>
  );
}
