import { createContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import api from "../axios";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemsId, setCartItemsId] = useState(
    JSON.parse(localStorage.getItem("cart")) || {},
  );
  const [deal, setDeal] = useState("");

  // gets products in cart
  const cartProducts = products
    .filter((product) => cartItemsId[product._id] > 0)
    .map((product) => ({
      ...product,
      quantity: cartItemsId[product._id],
    }));

  // calculate total cart items
  const totalcartItemsId = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  //calculates their total amount
  const cartSubtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  //adds to cart
  const addToCart = (productId) => {
    console.log(`${productId} added to cart`);
    setCartItemsId((prev) => {
      const updatedCart = {
        ...prev,
        [productId]: (prev[productId] || 0) + 1,
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // removes from cart
  const removeFromCart = (productId) => {
    setCartItemsId((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[productId];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // updates cart quantity
  const updateCartQuantity = (productId, quantity) => {
    setCartItemsId((prev) => {
      const updatedCart = { ...prev };
      updatedCart[productId] += quantity;

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // fetches all products from backend
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/products/all");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);

  //fetches deal from backend
  useEffect(() => {
    async function getDealOfTheDay() {
      try {
        const response = await api.get("/api/products/deal-of-the-day");
        setDeal(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getDealOfTheDay();
  }, []);

  // fetches filtered category from backend
  useEffect(() => {
    async function getFilteredCategory() {
      const response = await api.get(
        `/api/products?category=${filteredCategory}`,
      );
      if (response.data.length) setProducts(response.data);
    }
    getFilteredCategory();
  }, [filteredCategory]);

  // handles fuzzy search
  const fuse = new Fuse(products, {
    keys: ["make", "category", "model"],
    threshold: 0.4,
  });

  const filteredProducts = searchQuery.trim()
    ? fuse.search(searchQuery).map((result) => result.item)
    : products;

  return (
    <ShopContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        filteredProducts,
        cartItemsId,
        cartProducts,
        totalcartItemsId,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        filteredCategory,
        setFilteredCategory,
        searchQuery,
        setSearchQuery,
        deal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
