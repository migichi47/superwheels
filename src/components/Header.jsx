import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { Button } from "./Button";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import CreateContext from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export function Header() {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
    </>
  );
}

function FirstHeader() {
  const { showSidebar, setShowSidebar } = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 flex justify-between border-b border-black/30 items-center w-full z-100 text-white bg-primary py-2 px-10">
      {showSidebar && (
        <div className="flex flex-col absolute sm:hidden slide-from-left h-screen top-0 left-0 w-65 bg-white text-black z-100 pt-20 px-5 [&>a]:border-t [&>a]:border-gray-300 [&>a]:flex [&>a]:py-3 [&>a]:cursor-pointer">
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
      )}
      <img
        src="https://www.superwheelsautoparts.com/images/super-wheels.jpg"
        alt=""
        className="w-30"
      />
      <div className="flex gap-2 items-center [&>span]:rounded-sm [&>span]:cursor-pointer [&>span]:hover:bg-secondary">
        <span className="bg-white p-2 move-up">
          <BsWhatsapp className="text-green-500" />
        </span>
        <span className="bg-white p-2 move-up">
          <FaFacebook className="text-blue-500" />
        </span>
        <span className="bg-white p-2 text-black move-up">
          <BsTiktok className="" />
        </span>
        <span className="bg-white p-1.5 move-up">
          <img
            src="data:image/png;base64,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"
            alt="jiji-kenya logo"
            className="w-5 h-5"
          />
        </span>
      </div>
    </div>
  );
}

function SecondHeader() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary px-10 py-10 gap-4 w-full text-center">
      <p className="font-semibold text-white text-2xl">
        What are you looking for?
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="I am looking for..."
          className="bg-white px-3 py-2 rounded-lg"
        />
        <IoIosSearch className="absolute right-0 top-0 w-10 h-full p-2 text-gray-500" />
      </div>
    </div>
  );
}
