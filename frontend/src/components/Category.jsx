import { useContext } from "react";
import CreateContext from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export function Category({ name, image }) {
  const { setFilteredCategory } = useContext(CreateContext);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-2 group transition-colors cursor-pointer"
      onClick={() => {
        setFilteredCategory(name);
        navigate("/products");
      }}
    >
      <div className="overflow-hidden bg-gray-200 dark:bg-gray-300 rounded-lg p-2 group-hover:bg-gray-300 transition-colors">
        <img
          src={image}
          alt=""
          className="w-80 group-hover:scale-115 transition-all duration-400"
        />
      </div>
      <h3 className="text-sm text-center dark:text-gray-300 group-hover:text-secondary transition-colors">
        {name}
      </h3>
    </div>
  );
}
