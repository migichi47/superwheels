import { useState } from "react";
import { allProducts } from "../data/allProducts";
import { FiFilter } from "react-icons/fi";
import { categories } from "../data/categories";

export function ProductsPage() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="my-10 space-y-5">
      <div className="mx-auto w-fit flex flex-row-reverse gap-5">
        <div className="h-full flex relative group">
          <div
            className="flex py-2 px-4 rounded-md gap-10 bg-linear-to-b hover:from-primary hover:to-primary/0 transition-colors cursor-pointer from-gray-300 to-gray-100 items-center"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="text-[12px] sm:text-sm">filter</span>
            <FiFilter />
          </div>
          <ul
            className={`absolute text-gray-700 top-9 rounded-b-lg lg:hidden ${showMenu ? "block" : "hidden"} [&>li]:py-1 [&>li]:hover:bg-primary bg-white shadow-lg h-fit w-46 [&>li]:pl-4 [&>li]:border-gray-300 [&>li]:cursor-pointer [&>li]:pr-2 [&>li]:border-b lg:group-hover:block lg:group-hover:opacity-100 transition-all duration-1000`}
          >
            {categories.map((cat) => (
              <li key={cat.name} onClick={() => setShowMenu(false)}>
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-bold text-3xl">All Products</h1>
      </div>
      <div className="px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-7 w-fit max-w-350 mx-auto">
        {allProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function Product({ category, make, model, year, image, price }) {
  return (
    <div className="flex flex-col items-center w-fit mx-auto max-w-100 h-fit gap-2 border border-gray-300 rounded-sm break-inside-avoid hover:shadow-[0px_0px_10px_rgba(51,122,183,0.5)] transition-all cursor-pointer group">
      <div className="max-h-80 w-fit overflow-hidden">
        <img
          src={image}
          alt=""
          className="mx-auto h-full group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col items-center space-y-1 py-2">
        <p className="text-lsm font-semibold text-gray-700">
          <span className="text-black font-bold">{category}</span>{" "}
          <span>{make}</span> <span>{model}</span>
        </p>
        <p className="text-[11px] text-gray-500 font-semibold">{year}</p>
        <p className="text-primary text-sm font-semibold">Ksh {price}</p>
      </div>
    </div>
  );
}
