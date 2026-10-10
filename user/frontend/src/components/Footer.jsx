import { BsClock, BsInstagram, BsTiktok } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaPhone, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
// import { categories } from "../data/categories.js";
import { Button } from "./Button.jsx";

export function Footer() {
  return (
    <div className="bg-black text-white pt-20 pb-10 px-15 space-y-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 [&>div>h1]:text-lg [&>div>h1]:uppercase [&>div>h1]:font-semibold">
        <div className="space-y-5">
          <h1>Information</h1>
          <div className="text-amber-200 [&>p]:hover:text-primary cursor-pointer space-y-3 text-sm">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blogs</p>
          </div>
        </div>

        <div className="space-y-5">
          <h1>Categories</h1>
          <div className="text-amber-200 flex flex-col [&>span]:hover:text-primary cursor-pointer space-y-3 text-sm">
            <span>Headlights</span>
            <span>Side mirrors</span>
            <span>Bumpers</span>
            <span>Tailgates</span>
          </div>
        </div>
        <div className="space-y-5">
          <h1>Contact us</h1>
          <div className="[&>div>p]:text-amber-200 [&>div]:flex [&>div]:gap-2 [&>div]:items-center space-y-3 text-xs">
            <div>
              <CiLocationOn className="text-primary text-xl" />
              <p>Platinum Square, Hola Road off Baricho road</p>
            </div>
            <div>
              <BsClock className="text-primary text-xl" />
              <p>Mon - Sat: 9:00am - 6:00am</p>
            </div>
            <div>
              <FaPhone className="text-primary text-lg" />
              <p>+254725293360</p>
            </div>
            <div>
              <HiOutlineMail className="text-primary text-xl" />
              <p>info@superwheels.co.ke</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="uppercase text-lg font-semibold">Join us on</h1>
        <div className="flex gap-4 text-gray-400">
          <FaFacebook className="hover:text-gray-200 transition-colors cursor-pointer" />
          <BsInstagram className="hover:text-gray-200 transition-colors cursor-pointer" />
          <FaXTwitter className="hover:text-gray-200 transition-colors cursor-pointer" />
          <BsTiktok className="hover:text-gray-200 transition-colors cursor-pointer" />
        </div>
      </div>
      <hr className="text-gray-700" />
      <div className="text-[10px] text-gray-400 flex justify-between">
        <p>© {new Date().getFullYear()} Superwheels. All rights reserved.</p>
        <div>
          <span>Privacy policy</span>
          <span>Terms & conditions</span>
        </div>
      </div>
    </div>
  );
}
