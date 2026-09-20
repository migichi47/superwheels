import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { useContext } from "react";
import CreateContext from "../context/ContextProvider";
import { Product } from "../components/Product";
import { Category } from "../components/Category";

export function LandingPage() {
  return (
    <div className="space-y-30 mt-10">
      <FeaturedCategories />
      <RecommendedProductsGrid />
    </div>
  );
}

function FeaturedCategories() {
  return (
    <div className="flex flex-col gap-10 items-center dark:text-white">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl flex items-center gap-1">
          <GoDotFill className="text-xs text-primary" />
          <span className="dark:text-gray-200">OUR CATEGORIES</span>
          <GoDotFill className="text-xs text-primary" />
        </h1>
      </div>
      {/* category grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-5 px-5 max-w-200 mx-auto">
        {categories.map((cat) => (
          <Category key={cat.name} {...cat} />
        ))}
      </div>
    </div>
  );
}

function RecommendedProductsGrid() {
  const { allProducts } = useContext(CreateContext);
  const recommendedProducts = allProducts.slice(0, 10);

  return (
    <div className="flex flex-col gap-10 items-center mt-10 bg-gray-100 dark:bg-gray-800 dark:text-white py-10">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl flex items-center gap-1">
          <GoDotFill className="text-xs text-primary" />
          <span className="dark:text-gray-200">RECOMMENDED</span>
          <GoDotFill className="text-xs text-primary" />
        </h1>
      </div>
      {/* category grid */}
      <div className="px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-7 w-fit max-w-350 mx-auto">
        {recommendedProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}


