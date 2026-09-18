import { BsClock, BsInstagram, BsTiktok } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaPhone, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { categories } from "../data/categories.js";
import { Button } from "./Button.jsx";

export function Footer() {
  return (
    <div className="bg-black text-white py-20 px-15 space-y-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 [&>div>h1]:text-lg [&>div>h1]:uppercase [&>div>h1]:font-semibold">
        <div className="space-y-5">
          <h1>Information</h1>
          <div className="text-amber-200 [&>p]:hover:text-primary cursor-pointer space-y-3 text-sm">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blogs</p>
            <p>Products</p>
            <p>Returns and Refunds policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Notice</p>
          </div>
        </div>

        <div className="space-y-5">
          <h1>Categories</h1>
          <div className="text-amber-200 [&>p]:hover:text-primary cursor-pointer space-y-3 text-sm">
            {categories.map((cat) => (
              <p>{cat.name}</p>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h1>Contact us</h1>
          <div className="[&>div>p]:text-amber-200 [&>div]:flex [&>div]:gap-2 [&>div]:items-center space-y-3 text-sm">
            <div>
              <CiLocationOn className="text-primary text-xl" />
              <p>Platinum Square, Hola Road off Baricho road</p>
            </div>
            <div>
              <FaPhone className="text-primary text-lg" />
              <p>+254725293360</p>
            </div>
            <div>
              <HiOutlineMail className="text-primary text-xl" />
              <p>info@superwheels.co.ke</p>
            </div>
            <div>
              <BsClock className="text-primary text-xl" />
              <p>Mon - Sat: 9:00am - 6:00am</p>
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
      <div className="space-y-3">
        <h1 className="uppercase font-semibold text-[14px]">
          New to Superwheels?
        </h1>
        <p className="text-xs text-gray-300">
          Subscribe to our newsletter to get updates on our latest offers, you
          can unsubscribe at any time as described in Privacy Policy. To
          subscribe to our newsletter, you must first read and agree to Jumia's
          <a href="#" className="text-primary ml-2">
            I accept the Legal Terms
          </a>
        </p>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="border w-4 h-4" />
          <p className="text-gray-300/50 text-xs">
            I agree to Superwheels' Privacy Policy. You can unsubscribe from
            newsletters at any time.
          </p>
        </div>
        <div className="flex gap-2 h-10">
          <input
            type="text"
            placeholder="Enter E-mail Address"
            className="text-gray-600 grow max-w-100 h-full px-5 bg-white rounded-sm appearance-none outline-primary border-0 "
          />
          <Button
            className={
              "font-light bg-primary/0 border border-white hover:bg-secondary cursor-pointer hover:border-none transition-colors"
            }
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
