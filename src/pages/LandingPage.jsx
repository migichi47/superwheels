import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { allProducts } from "../data/allProducts";
import { Product } from "./ProductsPage";

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
    <div className="flex flex-col gap-10 items-center">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl flex items-center gap-1">
          <GoDotFill className="text-xs text-primary" />
          OUR CATEGORIES
          <GoDotFill className="text-xs text-primary" />
        </h1>
      </div>
      {/* category grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-5 px-5 max-w-200 mx-auto">
        {categories.map((cat) => (
          <Category {...cat} />
        ))}
      </div>
    </div>
  );
}

function Category({ name, image }) {
  return (
    <div className="flex flex-col gap-2 group transition-colors cursor-pointer">
      <div className="overflow-hidden bg-gray-200 rounded-lg p-2 group-hover:bg-gray-300 transition-colors">
        <img
          src={image}
          alt=""
          className="w-80 group-hover:scale-108 transition-all duration-400"
        />
      </div>
      <h3 className="text-sm text-center">{name}</h3>
    </div>
  );
}

function RecommendedProductsGrid() {
  return (
    <div className="flex flex-col gap-10 items-center mt-10 bg-gray-100 py-10">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl flex items-center gap-1">
          <GoDotFill className="text-xs text-primary" />
          RECOMMENDED
          <GoDotFill className="text-xs text-primary" />
        </h1>
      </div>
      {/* category grid */}
      <div className="px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-7 w-fit max-w-350 mx-auto">
        {allProducts.map((cat) => (
          <Product {...cat} />
        ))}
      </div>
    </div>
  );
}
