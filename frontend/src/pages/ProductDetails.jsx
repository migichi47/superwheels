import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../components/Button";
import { MdCheckCircle } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";
import { addComma } from "../utils/addComma";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { orderOnWhatsApp } from "../utils/whatsappUrl.js";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/api/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [id]);

  const { category, make, model, year, description, instock, price, image } =
    product;

  return (
    <div className="flex gap-10 p-10 min-h-150 flex-col md:flex-row items-center w-fit mx-auto">
      <div className="md:max-w-80 lg:max-w-120 max-w-120 overflow-hidden rounded-2xl p-5 border border-gray-300 h-fit">
        <img src={image} alt="" />
      </div>
      <div className="space-y-15">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">
            {category} {make} {model} {year}
          </h1>
          <h2 className="text-xl font-semibold text-primary">
            Kes {addComma(price)}
          </h2>
          {instock ? (
            <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <MdCheckCircle /> in stock
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-600 text-sm font-semibold">
              <IoMdCloseCircleOutline /> out of stock
            </span>
          )}
        </div>
        <div className="space-y-3 max-w-250">
          <div>
            <Button
              className="w-full flex justify-center gap-2 bg-secondary hover:bg-secondary/50 max-w-100"
              onClick={() =>
                orderOnWhatsApp(category, make, model, year, price)
              }
            >
              <BsWhatsapp /> Buy on Whatsapp
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-sm space-x-2">
              <span className="text-gray-500">Category:</span>
              <span className="text-gray-900">{category}</span>
            </p>
            <div className="text-sm space-x-2">
              <h3 className="text-gray-500 font-semibold">DESCRIPTION</h3>
              <p className="text-gray-900">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
