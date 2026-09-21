import { useContext, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { categories } from "../data/categories";
import CreateContext from "../context/ContextProvider";
import { Product } from "../components/Product";

export function ProductsPage() {
  const [showMenu, setShowMenu] = useState(false);
  const { allProducts, filteredCategory } = useContext(CreateContext);
  

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
        <h1 className="font-bold text-3xl dark:text-white">
          {filteredCategory ? filteredCategory : "All Products"}
        </h1>
      </div>
      <div className="px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-7 w-fit max-w-350 mx-auto">
        {allProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
