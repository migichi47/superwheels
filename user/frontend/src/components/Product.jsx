import { addComma } from "../utils/addComma";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { GoDotFill } from "react-icons/go";

export function Product({
  category,
  image,
  instock,
  make,
  model,
  price,
  year,
}) {
  return (
    <Link
      className="flex flex-col items-center w-full mx-auto max-w-100 h-fit gap-2 bg-white dark:bg-dark dark:text-white border
  border-gray-300 dark:border-1.5 dark:border-gray-600 break-inside-avoid rounded-2xl hover:-translate-y-1
    hover:shadow-sm transition-all duration-300 cursor-pointer group"
    >
      <div className="max-h-80 sm:max-h-50 w-full overflow-hidden flex items-center justify-center rounded-t-2xl">
        <img
          src={image}
          className="mx-auto sm:group-hover:scale-105 duration-300 object-center sm:object-[center_60%]
          sm:min-h-60 w-full sm:w-fit"
        />
      </div>
      <div className="flex flex-col space-y-2 py-5 px-5 w-full">
        <span className="text-xs font-bold text-secondary space-x-1.5 uppercase">
          {category}
        </span>
        <span className="text-sm text-black font-bold capitalize">
          {make} {model} {category}
        </span>
        <span className="text-[11px] text-gray-500">{year}</span>
        <span className="text-[11px] text-gray-500 flex items-center gap-1">
          <GoDotFill
            className={`${instock ? "text-green-500" : "text-red-500"}`}
            size={15}
          />
          {instock ? "in stock" : "out of stock"}
        </span>
        <hr className="text-gray-200" />
        <div className="flex items-center justify-between">
          <span className="text-pink-500 text-sm font-bold">Ksh. {addComma(price)}</span>
          <ShoppingCart className="bg-dark text-white p-1.5 w-8 h-8 rounded-sm hover:bg-primary" />
        </div>
      </div>
    </Link>
  );
}
