import { useContext } from "react";
import ShopContext from "../context/ContextProvider";
import EmptyCartMessage from "../components/cart/EmptyCartMessage";
import { CartProduct } from "../components/cart/CartProduct";
import OrderSummary from "../components/cart/OrderSummary";

const Cart = () => {
  const { cartProducts, totalcartItemsId, deal } = useContext(ShopContext);


  return (
    <div className="px-5 py-10 space-y-7 max-w-300 mx-auto">
      <h1 className="text-3xl font-semibold">Your shopping cart</h1>
      {totalcartItemsId === 0 ? (
        <EmptyCartMessage />
      ) : (
        <div className="flex flex-col gap-10 lg:flex-row relative">
          <div className="space-y-5">
            {cartProducts.map((cartProduct) => (
              <CartProduct {...cartProduct} deal={deal} key={cartProduct._id} />
            ))}
          </div>
          <OrderSummary deal={deal} cartProducts={cartProducts} />
        </div>
      )}
    </div>
  );
};

export default Cart;
