import { useContext } from "react";
import ShopContext from "../../context/ContextProvider";
import { addComma } from "../../utils/addComma";
import { Minus, Plus, Trash } from "lucide-react";

export function CartProduct({
  _id: id,
  make,
  model,
  category,
  year,
  price,
  image,
  deal,
}) {
  const { removeFromCart, updateCartQuantity, cartItemsId } =
    useContext(ShopContext);

  // gets quantity of individual cart product
  const getCartProductQuantity = (productId) => {
    return cartItemsId[productId];
  };

  return (
    <div
      className="border border-gray-300 bg-gray-100 p-5 flex justify-between rounded-lg lg:w-150
      max-w-200 mx-auto"
    >
      <div className="flex gap-5 w-full">
        <img
          src={image}
          alt=""
          className="object-cover w-30 min-w-30 h-30 rounded-lg"
        />
        <div
          className="flex flex-col lg:flex-row justify-center lg:justify-between w-full pr-10 lg:items-center
          space-y-5"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold capitalize">
              {make} {model} {category}
            </h1>
            <span className="text-xs text-gray-500">{year}</span>
            <h2 className="font-bold text-pink-500">
              {" "}
              Ksh. {addComma(deal?.product?._id === id ? deal.dealPrice : price)}
            </h2>
            {deal?.product?._id === id && <h2 className="line-through text-sm text-gray-500">{deal?.product.price}</h2>}
          </div>
          <div className="flex items-center border border-gray-300 rounded-sm w-fit gap-4 px-2 py-1">
            <Minus
              className="w-4 cursor-pointer"
              onClick={() => updateCartQuantity(id, -1)}
            />
            <span className="text-xs text-secondary font-bold">
              {getCartProductQuantity(id)}
            </span>
            <Plus
              className="w-4 cursor-pointer"
              onClick={() => updateCartQuantity(id, 1)}
            />
          </div>
        </div>
      </div>
      <Trash
        className="text-gray-500 hover:text-red-600 cursor-pointer lg:my-auto"
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
}
