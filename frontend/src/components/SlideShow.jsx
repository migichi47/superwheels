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
    <div
      className="flex justify-center lg:gap-10 items-center h-100 sm:h-150 pl-5 px-0 md:px-10 md:pl-0
    shadow-4xl bg-black/20 sm:bg-white"
    >
      <div className="space-y-15 z-10">
        <div className="space-y-2 items-center">
          <p className="text-lg md:text-3xl font-semibold text-gray-600">
            {description}
          </p>
          <p className="text-3xl md:text-6xl font-bold uppercase text-secondary">
            {title}
          </p>
          <p className="text-2xl md:text-6xl font-bold uppercase text-primary">
            {keyword}
          </p>
        </div>
        <Button
          className="px-6 mx-auto lg:m-0"
          onClick={() => navigate("/products")}
        >
          {buttonText}
        </Button>
      </div>
      <img src={image} alt="" className="flex min-w-0 max-w-50 md:max-w-100" />
    </div>
  );
}

const arrowClasses =
  "absolute top-7/8 sm:top-1/2 z-10 -translate-y-1/2 bg-none text-black hover:bg-primary w-12 h-12 lg:w-15 lg:h-15 rounded-full flex lg:group-hover:flex items-center justify-center border-2 border-gray-400 hover:scale-110 transition cursor-pointer lg:hidden";

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className={`right-4 ${arrowClasses}`}>
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className={`left-4 ${arrowClasses}`}>
      <FaChevronLeft />
    </button>
  );
}
