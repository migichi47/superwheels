import { useContext } from "react";
import CreateContext from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

export function Category() {
  return (
    <div className="min-w-40 sm:min-w-60 h-35 sm:h-45 overflow-hidden rounded-lg relative group">
      <div className="bg-black/40 absolute w-full h-full z-100" />
      <img
        src="https://images.unsplash.com/photo-1676288176903-a68732722cce?auto=format&fit=crop&w=1400&q=85"
        alt=""
        className="group-hover:scale-105 transition duration-300"
      />
      <div className="absolute z-100 bottom-0 text-white flex justify-between px-3 pb-3 w-full text-sm items-center">
        <span className="font-bold">Side Mirrors</span>
        <span>
          <MoveRight />
        </span>
      </div>
    </div>
  );
}
