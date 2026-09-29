import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { slides } from "../data/slides";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ?? SliderImport;

export function SlideShow() {
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

function Slide({ description, image, title, keyword, buttonText }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-10 items-center">
      <div className="space-y-15">
        <div className="space-y-2">
          <p className="text-3xl font-semibold text-gray-600">{description}</p>
          <p className="text-6xl font-bold uppercase">{title}</p>
          <p className="text-6xl font-bold uppercase text-primary">{keyword}</p>
        </div>
        <Button className="px-6" onClick={() => navigate("/products")}>
          {buttonText}
        </Button>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
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
