import { useEffect, useState } from "react";
import api from "../axios";
import { GoDotFill } from "react-icons/go";
import { LoadingProducts } from "./LoadingProducts";
import { ProductsGrid } from "./ProductsGrid";

export function RecommendedProductsGrid() {
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
