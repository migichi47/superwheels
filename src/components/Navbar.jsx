import { BiSearch } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { Button } from "./Button";
import CreateContext from "../context/ContextProvider";

export function Navbar() {
  const { setShowSidebar } = useContext(CreateContext);

  return (
    <nav className="sticky flex items-center md:top-15 top-12 border-b border-primary/50 z-50 bg-white py-3">
      <GiHamburgerMenu
        className="block lg:hidden relative sm:mx-5 mx-2"
        onClick={() => setShowSidebar(true)}
      />
      <div className="flex w-fit mx-auto sm:gap-10 gap-2 items-center">
        <div className="text-xs [&>a]:hover:bg-primary hidden lg:flex [&>a]:flex [&>a]:items-center h-10 [&>a]:px-2 [&>a]:rounded-t-lg [&>a]:hover:text-white [&>a]:transition-colors">
          <a href="/">HOME</a>
          <a href="/products">SHOP</a>
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
        <CiDark className="text-2xl" />
      </div>
    </nav>
  );
}
