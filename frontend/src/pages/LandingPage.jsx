import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { categories } from "../data/categories";
import { Category } from "../components/Category";
import { ProductsGrid } from "../components/ProductsGrid";
import api from "../axios";

import { slides } from "../data/slides.js";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SliderImport.default ?? SliderImport;

export function LandingPage() {
  return (
    <div className="space-y-30 mt-10">
      <SlideShow />
      <FeaturedCategories />
      <RecommendedProductsGrid />
    </div>
  );
}

function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full mx-auto px-20 shadow-xs">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide {...slide} />
        ))}
      </Slider>
    </div>
  );
}

function Slide({ description, image, title, keyword }) {
  return (
    <div className="flex justify-center gap-10 items-center">
      <div className="space-y-4">
        <p className="text-3xl font-semibold text-gray-600">{description}</p>
        <p className="text-6xl font-bold uppercase">{title}</p>
        <p className="text-6xl font-bold uppercase text-primary">{keyword}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white text-black
                hover:bg-primary w-15 h-15 rounded-full
                flex items-center justify-center border-2 border-gray-400
                hover:scale-110 transition cursor-pointer"
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white text-black
                hover:bg-primary w-15 h-15 rounded-full
                flex items-center justify-center border-2 border-gray-400
                hover:scale-110 transition cursor-pointer"
    >
      <FaChevronLeft />
    </button>
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

  useEffect(() => {
    const getRecommendedProducts = async () => {
      const response = await api.get("/api/products/recommended");
      setRecommendedProducts(response.data);
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
      <ProductsGrid products={recommendedProducts} />
    </div>
  );
}
