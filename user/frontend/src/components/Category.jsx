
import { MoveRight } from "lucide-react";

export function Category({name, image}) {
  return (
    <div className="min-w-40 sm:min-w-60 h-35 sm:h-45 overflow-hidden rounded-lg relative group">
      <div className="bg-linear-to-b from-black/30 to-black/90 absolute w-full h-full z-50" />
      <img
        src={image}
        alt=""
        className="group-hover:scale-105 transition duration-300"
      />
      <div className="absolute z-50 bottom-0 text-white flex justify-between px-3 pb-3 w-full text-sm items-center">
        <span className="font-bold capitalize">{name}</span>
        <span>
          <MoveRight />
        </span>
      </div>
    </div>
  );
}
