import { MoveRight } from "lucide-react";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import api from "../axios";
import { LoadingProducts } from "./LoadingProducts";

const FeaturedParts = () => {
  const [featuredParts, setFeaturedParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await api.get("/api/products/recommended");
        setFeaturedParts(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getFeaturedProducts();
  }, []);

  return (
    <div className="bg-gray-100 w-full py-15">
      <div className="space-y-8 relative max-w-300 mx-auto px-4 sm:px-10">
        <div className="space-y-2">
          <h1 className="text-primary font-bold text-[12px]">
            SELECTED FOR YOU
          </h1>
          <h2 className="text-2xl">Featured parts</h2>
          <p className="text-gray-500 text-sm">
            Popular vehicle parts, ready to explore.
          </p>
        </div>
        <div
          className="flex text-secondary gap-1 font-semibold text-sm absolute right-10 top-5 cursor-pointer
        hover:text-secondary/80 items-center"
        >
          <span>View all</span>
          <MoveRight className="w-4" />
        </div>
        {loading ? (
          <LoadingProducts />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-fit mx-auto">
            {featuredParts.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedParts;
