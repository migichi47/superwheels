import { useContext, useState } from "react";
import { FiFilter } from "react-icons/fi";
// import { categories } from "../data/categories";
import CreateContext from "../context/ContextProvider";
import { formatName } from "../utils/formatName";
import { LoadingProducts } from "../components/LoadingProducts";

export function ProductsPage() {
  const [showMenu, setShowMenu] = useState(false);
  const { filteredProducts, filteredCategory } = useContext(CreateContext);

  if(filteredProducts.length === 0) return <LoadingProducts />

  return (
    <div className="my-10 space-y-5">
      <div className="mx-auto w-fit flex gap-5">
        <h1 className="font-bold text-3xl dark:text-white">
          {filteredCategory ? formatName(filteredCategory) : "All Products"}
        </h1>
        <div className="h-full flex relative group">
          <div
            className="flex py-2 px-4 rounded-md gap-10 bg-linear-to-b hover:from-primary hover:to-primary/0
            transition-colors cursor-pointer from-gray-300 to-gray-100 items-center"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="text-[12px] sm:text-sm">filter</span>
            <FiFilter />
          </div>
          <ul
            className={`absolute text-gray-700 top-9 rounded-b-lg lg:hidden ${showMenu ? "block" : "hidden"} 
            [&>li]:py-1 [&>li]:hover:bg-primary bg-white shadow-lg h-fit w-46 [&>li]:pl-4 [&>li]:border-gray-300
            [&>li]:cursor-pointer [&>li]:pr-2 [&>li]:border-b lg:group-hover:block lg:group-hover:opacity-100 
            transition-all duration-1000`}
          >
            {/* {categories.map((cat) => (
              <li key={cat.name} onClick={() => setShowMenu(false)}>
                {cat.name}
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      {/* products grid */}
    </div>
  );
}
