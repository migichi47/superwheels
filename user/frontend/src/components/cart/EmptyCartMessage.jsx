import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export default function EmptyCartMessage() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-100 border border-gray-200 rounded-lg h-[60vh] flex flex-col justify-center
            items-center gap-5"
    >
      <IoCartOutline className="bg-gray-200 w-15 h-15 p-3.5 rounded-full text-gray-600" />
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-xl">Your cart is empty.</h2>
        <p className="text-sm text-gray-500">
          Browse our catalog to find parts for your vehicle.
        </p>
        <Button
          className="text-black px-5 py-3"
          onClick={() => navigate("/products")}
        >
          Explore spare parts
        </Button>
      </div>
    </div>
  );
}