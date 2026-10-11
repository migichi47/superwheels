import { useContext } from "react";
import ShopContext from "../../context/ContextProvider";
import { addComma } from "../../utils/addComma";
import { Button } from "../Button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { orderOnWhatsApp } from "../../utils/whatsappUrl";

export default function OrderSummary({ cartProducts }) {
  const { cartSubtotal, deal } = useContext(ShopContext);

  const cartItems = JSON.parse(localStorage.getItem("cart"));
  const dealQuantity = cartItems[deal?.product?._id];
  const totalAfterDeal =
    cartSubtotal -
    dealQuantity * deal?.product?.price +
    dealQuantity * deal?.dealPrice;

  console.log(cartItems[deal?.product?._id]);

  return (
    <div
      className="p-5 border border-gray-300 bg-gray-100 flex flex-col rounded-lg max-w-200 lg:max-w-120
      mx-auto lg:m-0 w-full space-y-5 h-fit sticky top-40"
    >
      <h1 className="font-semibold text-xl">Order summary</h1>
      <div className="[&>div]:flex [&>div]:justify-between [&>div]:text-xs [&>div]:[&>h1]:text-gray-500 space-y-3">
        <div>
          <h1>Subtotal</h1>
          <span className="font-semibold">
            Ksh.
            {addComma(
              cartItems[deal?.product?._id] > 0 ? totalAfterDeal : cartSubtotal,
            )}
          </span>
        </div>
        <div>
          <h1>Delivery</h1>
          <span className="text-gray-500">Calculated when ordering</span>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div className="flex justify-between text-lg">
        <h1>Total</h1>
        <div className="flex flex-col items-end">
          <span className="font-bold text-xl">
            Ksh. {addComma(totalAfterDeal)}
          </span>
          {cartItems[deal?.product?._id] > 0 && (
            <span className="text-xs line-through">
              Ksh. {addComma(cartSubtotal)}
            </span>
          )}
        </div>
      </div>
      <Button
        className="text-black flex w-full mx-auto justify-center gap-2 text-xs"
        onClick={() => orderOnWhatsApp(cartProducts, totalAfterDeal)}
      >
        <Phone className="w-3" />
        <span className="font-bold">Proceed to order</span>
      </Button>
      <Link className="text-secondary font-bold text-xs hover:underline mx-auto">
        Continue shopping
      </Link>
    </div>
  );
}
