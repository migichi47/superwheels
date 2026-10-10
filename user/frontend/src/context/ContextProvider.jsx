import { createContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import api from "../axios";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState("light");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // handles theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

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
    <CreateContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        filteredProducts,
        products,
        setTheme,
        theme,
        filteredCategory,
        setFilteredCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export default CreateContext;
