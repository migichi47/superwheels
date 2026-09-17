import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { Button } from "./Button";

export function Header() {
  return (
    <>
      <div className="sticky top-0 flex justify-between items-center w-full z-100 text-white bg-secondary py-2 px-10">
        <img src="../../images/logo.jpg" alt="" className="md:w-30 w-15" />
        <div className="flex items-center gap-5 [&>div]:inline-flex [&>div]:gap-1 [&>div]:items-center ">
          <div>
            <MdDriveEta className="md:text-xl" />
            <span className="lg:max-w-50 sm:max-w-25 max-w-18 leading-4 sm:text-sm text-xs md:text-[15px]">
              Drive with confidence
            </span>
          </div>
          <div>
            <GiTakeMyMoney className="md:*:text-xl" />
            <span className="lg:max-w-50 sm:max-w-25 max-w-18 leading-4 sm:text-sm text-xs md:text-[15px]">
              At the lowest prices
            </span>
          </div>
          <div>
            <AiOutlineDoubleRight className="md:text-xl" />
            <span className="lg:max-w-50 sm:max-w-25 max-w-18 leading-4 sm:text-sm text-xs md:text-[15px]">
              Unbeatable Quality deals
            </span>
          </div>
        </div>
        <div>
          <div className="hidden sm:block">
            <Button
              className={
                "font-bold  text-sm hover:bg-white hover:text-primary cursor-pointer move-up"
              }
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200 px-10 py-1.5 gap-4 w-full text-center">
        <p className="text-gray-500 text-sm">
          New and carefully inspected ex-Japan body parts for
          <span className="font-bold text-[15px] text-gray-800 ml-2">
            Toyota, Nissan, Mazda, Suzuki, Honda, Mitsubishi,
          </span>
          etc.
        </p>

        <div className="flex gap-2 items-center [&>span]:rounded-sm [&>span]:cursor-pointer [&>span]:hover:bg-primary">
          <span className="bg-white p-2 move-up">
            <BsWhatsapp className="text-green-500" />
          </span>
          <span className="bg-white p-2 move-up">
            <FaFacebook className="text-blue-500" />
          </span>
          <span className="bg-white p-2 move-up">
            <BsTiktok className="" />
          </span>
          <span className="bg-white p-1.5 move-up">
            <img src="../../images/jiji icon.png" alt="" className="w-5" />
          </span>
        </div>
      </div>
    </>
  );
}
