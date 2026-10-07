import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { Category } from "../components/Category";
import { ProductsGrid } from "../components/ProductsGrid";
import { SlideShow } from "../components/SlideShow";
import api from "../axios";
import { DealOfTheDay } from "../components/DealOfTheDay";
import { LoadingProducts } from "../components/LoadingProducts";

export function LandingPage() {
  return (
    <div>
      <SlideShow />
      <DealOfTheDay />
      <FeaturedCategories />
      <RecommendedProductsGrid />
    </div>
  );
}

function FeaturedCategories() {
  return (
    <div className="flex flex-col gap-10 items-center dark:text-white shadow-sm pb-10">
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecommendedProducts = async () => {
      try {
        const response = await api.get("/api/products/recommended");
        setRecommendedProducts(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getRecommendedProducts();
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
      {loading ? (
        <LoadingProducts />
      ) : (
        <ProductsGrid products={recommendedProducts} />
      )}
    </div>
  );
}
