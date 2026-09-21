import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import CreateContext from "../context/ContextProvider";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";

export function Navbar() {
  const { setShowSidebar, setTheme, theme } = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <nav className="sticky flex items-center md:top-15 top-15 border-b border-primary/50 z-50 bg-white py-3 dark:bg-dark dark:text-white">
      <GiHamburgerMenu
        className="block sm:hidden text-3xl relative ml-10"
        onClick={() => setShowSidebar(true)}
      />
      <div className="flex mx-auto sm:gap-10 gap-2 items-center justify-end w-full pr-10">
        <div className="text-xs [&>a]:hover:bg-primary hidden sm:flex [&>a]:flex [&>a]:items-center h-10 [&>a]:px-2 [&>a]:rounded-t-lg [&>a]:hover:text-white [&>a]:transition-colors">
          <a href="/">HOME</a>
          <a href="/products">SHOP</a>
          <a href="/about">ABOUT US</a>
          <a href="#">BLOGS</a>
          <a href="#">CONTACT</a>
        </div>
        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="cursor-pointer text-secondary dark:text-white"
        >
          {theme === "dark" ? (
            <MdOutlineLightMode className="text-2xl" />
          ) : (
            <CiDark className="text-3xl" />
          )}
        </div>
        <Button onClick={() => navigate("/products")}>Shop now</Button>
      </div>
    </nav>
  );
}
