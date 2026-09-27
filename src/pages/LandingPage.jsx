import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Category } from "../components/Category";
import api from "../axios";
import products from "../../data/products";
import { ProductsGrid } from "../components/ProductsGrid";

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
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  console.log(recommendedProducts);

  useEffect(() => {
    // const getRecommendedProducts = async () => {
    //   const response = await api.get("/api/products/recommended");
    //   setRecommendedProducts(response.data);
    // };
    // getRecommendedProducts()

    setRecommendedProducts(products);
  }, []);

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
      <ProductsGrid products={recommendedProducts} />
    </div>
  );
}
