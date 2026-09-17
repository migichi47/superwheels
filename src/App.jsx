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
    <div className="flex flex-col items-center">
      <h1 className="text-primary">TOP FEATURED COLLECTIONS</h1>
      <h2 className="font-bold text-3xl flex items-center">
        <GoDotFill className="text-sm text-primary" />
        OUR CATEGORIES
        <GoDotFill className="text-sm text-primary" />
      </h2>
      {/* category grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat) => (
          <Category {...cat} />
        ))}
      </div>
    </div>
  );
}

function Category({ name, image, description }) {
  return (
    <div className="bg-gray-200 flex flex-col p-5 gap-2 rounded-sm">
      <img src={image} alt="" className="w-80" />
      <h3 className="font-semibold text-lg uppercase">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <Button className={"bg-black hover:bg-primary cursor-pointer"}>
        View More
      </Button>
    </div>
  );
}
