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
    <div className="w-full mx-auto lg:px-20 shadow-xs group transition">
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
    <div className="flex justify-center gap-10 items-center h-150">
      <div className="space-y-15 absolute lg:relative px-10 lg:px-0 z-10">
        <div className="space-y-2">
          <p className="text-xl lg:text-3xl font-semibold text-white lg:text-gray-600">{description}</p>
          <p className="text-3xl lg:text-6xl font-bold uppercase text-secondary">{title}</p>
          <p className="text-5xl lg:text-6xl font-bold uppercase text-primary">{keyword}</p>
        </div>
        <Button className="px-6" onClick={() => navigate("/products")}>
          {buttonText}
        </Button>
      </div>
      <div className="bg-black/20 w-full h-full z-1 absolute lg:hidden" />
      <img src={image} alt="" className="" />
    </div>
  );
}
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white text-black
                hover:bg-primary w-12 h-12 lg:w-15 lg:h-15 rounded-full flex
                lg:group-hover:flex items-center justify-center border-2 border-gray-400
                hover:scale-110 transition cursor-pointer lg:hidden"
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
                hover:bg-primary w-12 h-12 lg:w-15 lg:h-15 rounded-full flex
                lg:group-hover:flex items-center justify-center border-2 border-gray-400
                hover:scale-110 transition cursor-pointer lg:hidden"
    >
      <FaChevronLeft />
    </button>
  );
}
