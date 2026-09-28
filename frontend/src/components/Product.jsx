import { FaWhatsapp } from "react-icons/fa";
import { addComma } from "../utils/addComma";
import { truncateWords } from "../utils/truncateWords";
import { Button } from "./Button";

export function Product({
  category,
  make,
  model,
  year,
  image,
  price,
  description,
}) {
  return (
    <div
      className="flex flex-col items-center w-fit mx-auto max-w-100 h-fit gap-2 bg-white dark:bg-dark dark:text-white border
  border-gray-300 dark:border-1.5 dark:border-gray-600 rounded-2xl break-inside-avoid
    hover:shadow-[0px_0px_10px_rgba(51,122,183,0.5)] transition-all cursor-pointer group"
    >
      <div className="max-h-80 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          className="mx-auto h-full w-full group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col items-center space-y-2 py-2 px-5">
        <p className="text-[16px] font-semibold text-gray-800 dark:text-gray-300">
          <span className="font-bold">{category}</span> <span>{make}</span>{" "}
          <span>{model}</span>
          <span className="mx-1 font-semibold">{year}</span>
        </p>
        <p className="text-[11px] text-center text-gray-500 dark:text-gray-600">
          {truncateWords(description, 15)}
        </p>
        <p className="text-secondary dark:text-primary/80 text-lg font-bold">
          Ksh {addComma(price)}
        </p>
        <Button className="w-full space-x-2 flex justify-center text-xsm```">
          <FaWhatsapp /> <span>Order on Whatsapp</span>
        </Button>
      </div>
    </div>
  );
}
