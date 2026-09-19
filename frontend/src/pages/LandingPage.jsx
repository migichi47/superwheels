import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { Product } from "./ProductsPage";
import { useContext } from "react";
import CreateContext from "../context/ContextProvider";

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
          <Category key={cat.name} {...cat} />
        ))}
      </div>
    </div>
  );
}

function Category({ name, image }) {
  return (
    <div
      className="flex flex-col gap-2 group transition-colors cursor-pointer"
      onClick={() => {
        switch (name.toLowerCase()) {
          case "side mirrors":
            console.log(1);
            break;
          case "doors":
            console.log(2);
            break;
          case "bonnets":
            console.log(3);
            break;
          case "wind breakers":
            console.log(4);
            break;
          case "nose cuts":
            console.log(5);
            break;
          case "headlights":
            console.log(6);
            break;
          case "fog lights":
            console.log(7);
            break;
          case "bumpers":
            console.log(8);
            break;
          case "tail lights":
            console.log(9);
            break;
          case "fenders/wing":
            console.log(10);
            break;
        }
      }}
    >
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
  const { allProducts } = useContext(CreateContext);
  const recommendedProducts = allProducts.slice(0, 10);

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
        {recommendedProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
