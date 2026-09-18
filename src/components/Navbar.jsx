import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import CreateContext from "../context/ContextProvider";

export function Navbar() {
  const { setShowSidebar } = useContext(CreateContext);

  return (
    <nav className="sticky flex items-center md:top-15 top-15 border-b border-primary/50 z-50 bg-white py-3">
      <GiHamburgerMenu
        className="block sm:hidden relative ml-10"
        onClick={() => setShowSidebar(true)}
      />
      <div className="flex w-fit mx-auto sm:gap-10 gap-2 items-center">
        <div className="text-xs [&>a]:hover:bg-primary hidden sm:flex [&>a]:flex [&>a]:items-center h-10 [&>a]:px-2 [&>a]:rounded-t-lg [&>a]:hover:text-white [&>a]:transition-colors">
          <a href="/">HOME</a>
          <a href="/products">SHOP</a>
          <a href="/about">ABOUT US</a>
          <a href="#">BLOGS</a>
          <a href="#">CONTACT</a>
        </div>
        <CiDark className="text-2xl" />
      </div>
    </nav>
  );
}
