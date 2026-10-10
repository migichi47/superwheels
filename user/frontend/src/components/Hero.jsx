import { FaArrowRight } from "react-icons/fa";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="gap-10 items-center max-w-300 mx-auto flex flex-col md:grid grid-cols-[1fr_1fr] px-4 sm:px-10">
      {/* left-section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="w-7 h-1 rounded-sm bg-primary" />
          <h1 className="text-secondary font-bold text-xs">
            KENYA'S AUTOMOTIVE PARTS MARKETPLACE
          </h1>
        </div>
        <h2 className="text-4xl sm:text-5xl flex flex-col">
          Find the right parts.
          <span className="text-primary">Keep moving.</span>
        </h2>
        <p className="text-gray-500">
          Quality spare parts for the vehicles you know. Search by make, model
          or category and find your fit with confidence.
        </p>
        <div className="flex items-center h-12 lg:hidden">
          <input
            type="text"
            className="bg-gray-100 border border-gray-200 border-r-0 rounded-l-lg h-full outline-none px-3 text-sm grow"
            placeholder="search parts, vehicle models, or categories..."
          />
          <button className="bg-primary h-full rounded-r-lg text-sm font-semibold px-5">
            Search
          </button>
        </div>
        <div className="flex gap-3 mx-auto">
          <button
            className="bg-primary rounded-lg text-sm font-semibold px-5 py-3 flex items-center gap-2 hover:-translate-y-1
          transition-all hover:text-white"
          >
            Shop all parts <FaArrowRight />
          </button>
          <button className="rounded-lg text-sm flex font-semibold px-5 py-3 border border-gray-300 hover:-translate-y-1 transition-all">
            Explore categories
          </button>
        </div>
      </div>
      {/* right-section */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl rounded-br-[60px] max-h-90 md:max-h-110">
          <img
            src="https://images.unsplash.com/photo-1676288176903-a68732722cce?auto=format&fit=crop&w=1400&q=85"
            alt=""
            className="cover object-center"
          />
        </div>
        <div className="absolute bg-white bottom-10 left-3 md:-left-10 z-50 shadow px-5 py-4 rounded-lg flex gap-2">
          <div className="bg-green-100 px-2 py-1 rounded-full w-fit text-green-800">
            <Check className="w-4" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xs">Part-match support</span>
            <span className="text-[9px]">We help you find the right fit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
