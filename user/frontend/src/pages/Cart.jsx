import { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { addComma } from "../utils/addComma";
import { Minus, Phone, Plus, Trash } from "lucide-react";
import ShopContext from "../context/ContextProvider";

const Cart = () => {
  const { cartProducts } = useContext(ShopContext);

  return (
    <div className="px-5 py-10 space-y-7 max-w-300 mx-auto">
      <h1 className="text-3xl font-semibold">Your shopping cart</h1>
      <EmptyCartMessage />
      <div className="flex flex-col gap-10 lg:flex-row relative">
        <div className="space-y-5">
          {cartProducts.map((cartProduct) => (
            <CartProduct {...cartProduct} />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;

function EmptyCartMessage() {
  const navigate = useNavigate();
  const { totalcartItemsId } = useContext(ShopContext);

  if (totalcartItemsId === 0)
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

function CartProduct({ _id: id, make, model, category, year, price, image }) {
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
            <h2 className="font-bold text-pink-500">Ksh. {addComma(price)}</h2>
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

function OrderSummary() {
  const { cartSubtotal } = useContext(ShopContext);

  return (
    <div
      className="p-5 border border-gray-300 bg-gray-100 flex flex-col rounded-lg max-w-200 lg:max-w-120
      mx-auto lg:m-0 w-full space-y-5 h-fit sticky top-40"
    >
      <h1 className="font-semibold text-xl">Order summary</h1>
      <div className="[&>div]:flex [&>div]:justify-between [&>div]:text-xs [&>div]:[&>h1]:text-gray-500 space-y-3">
        <div>
          <h1>Subtotal</h1>
          <span className="font-semibold">Ksh. {addComma(cartSubtotal)}</span>
        </div>
        <div>
          <h1>Delivery</h1>
          <span className="text-gray-500">Calculated when ordering</span>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div className="flex justify-between text-lg">
        <h1>Total</h1>
        <span className="font-bold text-xl">Ksh. {addComma(cartSubtotal)}</span>
      </div>
      <Button className="text-black flex w-full mx-auto justify-center gap-2 text-xs">
        <Phone className="w-3" />
        <span className="font-bold">Proceed to order</span>
      </Button>
      <Link className="text-secondary font-bold text-xs hover:underline mx-auto">
        Continue shopping
      </Link>
    </div>
  );
}
