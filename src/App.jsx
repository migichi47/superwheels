import { GoDotFill } from "react-icons/go";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { categories } from "./categories";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <FeaturedCategories />
    </>
  );
}

function FeaturedCategories() {
  return (
    <div className="flex flex-col gap-10 items-center mt-10">
      <div className="text-center space-y-2">
        <h1 className="text-primary">TOP FEATURED COLLECTIONS</h1>
        <h2 className="font-bold text-3xl flex items-center">
          <GoDotFill className="text-sm text-primary" />
          OUR CATEGORIES
          <GoDotFill className="text-sm text-primary" />
        </h2>
      </div>
      {/* category grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
        {categories.map((cat) => (
          <Category {...cat} />
        ))}
      </div>
    </div>
  );
}

function Category({ name, image, description }) {
  return (
    <div className="bg-gray-200 flex flex-col p-5 gap-2 group rounded-lg hover:shadow-[2px_2px_10px_rgba(0,0,0,0.5)] transition-colors">
      <div className="overflow-hidden">
        <img src={image} alt="" className="w-80 group-hover:scale-110 transition-all duration-400" />
      </div>
      <h3 className="font-semibold text-lg uppercase">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      <Button className={"bg-black hover:bg-primary cursor-pointer"}>
        View More
      </Button>
    </div>
  );
}
