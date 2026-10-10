import { MoveRight } from "lucide-react";

const FeaturedParts = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="space-y-8 relative max-w-300 mx-auto px-4 sm:px-10">
        <div className="space-y-2">
          <h1 className="text-primary font-bold text-[12px]">
            BROWSE THE RANGE
          </h1>
          <h2 className="text-2xl">Shop by category</h2>
          <p className="text-gray-500 text-sm">
            Start with the part you need and narrow it down to your vehicle.
          </p>
        </div>
        <div className="flex text-secondary gap-1 font-semibold text-sm absolute right-10 top-5 cursor-pointer
        hover:text-secondary/80 items-center">
          <span>View all</span>
          <MoveRight className="w-4" />
        </div>
        <div className="flex overflow-x-scroll hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 w-fit mx-auto"></div>
      </div>
    </div>
  );
};

export default FeaturedParts;
