import { GoDotFill } from "react-icons/go";
import { Category } from "./Category";
import { categories } from "../data/categories";

export function FeaturedCategories() {
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