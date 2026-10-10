import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import CreateContext from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

export function Header() {
  const { showSidebar, setShowSidebar } = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <div className="fixed z-100 w-full [&>nav]:max-w-300 [&>nav]:mx-auto">
      <nav
        className="top-0 flex justify-between items-center text-dark
      bg-white py-2 px-5 gap-5"
      >
        {showSidebar && <PhoneNav />}

        <img
          src="../../images/logo.png"
          alt=""
          className="w-30"
          onClick={() => navigate("/")}
        />

        <div
          className="bg-gray-100 lg:flex items-center border border-gray-200 rounded-lg outline-secondary grow max-w-140
        hidden"
        >
          <IoIosSearch className="mx-3 text-gray-500" />
          <input
            type="text"
            className="outline-none text-sm grow"
            placeholder="search parts, vehicles, models, etc."
          />
          <button className="bg-secondary text-white font-semibold text-sm h-10 px-4 rounded-r-lg cursor-pointer">
            Search
          </button>
        </div>

        <div className="lg:flex items-center gap-1 hidden">
          <CiUser className="text-xl" />
          <div>
            <p className="text-[10px] text-gray-500">Need help?</p>
            <h1 className="text-xs font-semibold">Customer Support</h1>
          </div>
        </div>

        <div className="flex items-center relative lg:gap-2 gap-5">
          <IoCartOutline className="text-2xl" />
          <span className="absolute -top-1 left-3.5 bg-primary rounded-full text-[10px] px-1">
            0
          </span>
          <span className="font-semibold text-sm hidden lg:block">Cart</span>
          <GiHamburgerMenu
            className="text-xl relative lg:hidden"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </nav>
      <hr className="text-gray-200" />
      <nav
        className="items-center bg-white px-5 lg:flex gap-5 justify-start w-full [&>a]:text-gray-700
        text-xs [&>a]:flex [&>a]:items-center h-14 [&>a]:px-2 [&>a]:rounded-t-lg
        [&>a]:transition-colors [&>a]:font-semibold hidden"
      >
        <a href="/" className="border-b-2 border-b-primary">
          HOME
        </a>
        <a href="/products">SHOP</a>
        <a href="/about">ABOUT US</a>
        <a href="#">BLOGS</a>
        <a href="#">CONTACT</a>
      </nav>
      <hr className="text-gray-200" />
    </div>
  );
}

function PhoneNav() {
  const { setShowSidebar } = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col absolute lg:hidden slide-from-left h-screen top-0 left-0 w-65 bg-white text-black z-100 pt-20 
            px-5 [&>a]:border-t [&>a]:border-gray-300 [&>a]:flex [&>a]:py-3 [&>a]:cursor-pointer"
    >
      <ImCross
        className="absolute right-10 top-5"
        onClick={() => setShowSidebar(false)}
      />
      <a
        onClick={() => {
          navigate("/");
          setShowSidebar(false);
        }}
      >
        HOME
      </a>
      <a
        onClick={() => {
          navigate("/products");
          setShowSidebar(false);
        }}
      >
        SHOP
      </a>
      <a
        onClick={() => {
          navigate("/about");
          setShowSidebar(false);
        }}
      >
        ABOUT US
      </a>
      <a
        onClick={() => {
          navigate("/");
          setShowSidebar(false);
        }}
      >
        BLOGS
      </a>
      <a
        onClick={() => {
          navigate("/");
          setShowSidebar(false);
        }}
      >
        CONTACT
      </a>
    </div>
  );
}
