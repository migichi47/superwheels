import { addComma } from "../utils/addComma";
import { truncateWords } from "../utils/truncateWords";

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
      className="flex flex-col items-center w-fit mx-auto max-w-100 h-fit gap-2 bg-gray-200
    dark:bg-dark dark:text-white border border-gray-300 dark:border-gray-700 rounded-sm break-inside-avoid 
    hover:shadow-[0px_0px_10px_rgba(51,122,183,0.5)] transition-all cursor-pointer group"
    >
      <div className="max-h-80 w-fit overflow-hidden">
        <img
          src={image}
          className="mx-auto h-full group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col items-center space-y-1 p-2">
        <p className="text-[16px] font-semibold text-gray-800 dark:text-gray-300">
          <span className="font-bold">{category}</span> <span>{make}</span>{" "}
          <span>{model}</span>
          <span className="mx-1 font-semibold">{year}</span>
        </p>
        <p className="text-[11px] text-center text-gray-500 dark:text-gray-400">
          {truncateWords(description, 15)}
        </p>
        <p className="text-secondary dark:text-primary/80 text-lg font-bold">
          Ksh {addComma(price)}
        </p>
      </div>
    </div>
  );
}
