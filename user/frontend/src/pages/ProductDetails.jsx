import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../components/Button";
import { MdCheckCircle } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";
import { addComma } from "../utils/addComma";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { orderOnWhatsApp } from "../utils/whatsappUrl.js";
import { capitaliseFirstLetter } from "../utils/formatName.js";
import { LoadingProducts } from "../components/LoadingProducts.jsx";
import { Phone, ShoppingCart } from "lucide-react";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  const { category, make, model, year, description, instock, price, image } =
    product;

  const productName = `${capitaliseFirstLetter(category)} ${capitaliseFirstLetter(make)} ${capitaliseFirstLetter(model)} ${year}`;

  if (loading) {
    return <LoadingProducts />;
  }

  return (
    <>
      <div className="flex gap-10 px-10 py-10 flex-col md:flex-row items-center max-w-300 mx-auto">
        <div className="h-full space-y-5">
          <div className="md:max-w-80 lg:max-w-100 max-h-100 max-w-120 overflow-hidden rounded-lg h-fit">
            <img src={image} alt="" />
          </div>
          <div
            className="flex min-w-20 gap-4 [&>img]:w-18 [&>img]:rounded-lg [&>img]:cursor-pointer
          overflow-hidden h-18 w-fit [&>img]:hover:border transition-colors"
          >
            <img src={image} alt="" className="border-2 border-primary" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
        </div>
        <div className="space-y-15">
          <div className="space-y-3">
            <h1 className="font-semibold text-3xl">{productName}</h1>
            <h2 className="text-xl font-semibold text-primary">
              Ksh. {addComma(price)}
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
            <hr className="text-gray-200" />
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="space-y-3 max-w-250">
            <div className="flex gap-2">
              <Button className="flex justify-center gap-2 text-black text-xs font-semibold grow">
                <ShoppingCart className="w-4" />
                Add to Cart
              </Button>
              <Button
                className="text-black bg-transparent border text-xs border-gray-300 grow flex items-center justify-center
              gap-2 hover:bg-transparent hover:shadow-lg"
              >
                <Phone className="w-4" />
                Ask about this part
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm space-x-2">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-900">{category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
