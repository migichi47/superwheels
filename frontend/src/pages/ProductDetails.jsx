import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../components/Button";
import { MdCheckCircle } from "react-icons/md";

export function ProductDetails() {
  return (
    <div className="flex gap-10 p-10 min-h-150 flex-col md:flex-row items-center w-fit mx-auto">
      <div className="md:max-w-80 lg:max-w-120 max-w-120 overflow-hidden rounded-2xl p-5 border border-gray-300 h-fit">
        <img
          src="https://pictures-kenya.jijistatic.com/63186269_MTUwMC0xMTI1LTA1NTE2MjIxNzg.webp"
          alt=""
        />
      </div>
      <div className="space-y-15">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Headlight Mazda Atenza 2016</h1>
          <h2 className="text-xl font-semibold text-primary">Kes 28,000</h2>
          <span className="flex items-center gap-1 text-green-600 text-sm"><MdCheckCircle /> in stock</span>
        </div>

        <div className="space-y-3">
          <div>
            <Button className="w-full flex justify-center gap-2 bg-secondary hover:bg-secondary/50">
              <BsWhatsapp /> Buy on Whatsapp
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm space-x-2">
              <span className="text-gray-500">Category:</span>
              <span className="text-gray-900">Headlights</span>
            </p>
            <div className="text-sm space-x-2">
              <h3 className="text-gray-500 font-semibold">DESCRIPTION</h3>
              <p className="text-gray-900">
                Front headlight assembly for Mazda Atenza 2016 model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
