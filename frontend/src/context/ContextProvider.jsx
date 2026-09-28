import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../axios";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [theme, setTheme] = useState("light");
  const [filteredCategory, setFilteredCategory] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/products/all");
        setDisplayedProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function getFilteredCategory() {
      const response = await api.get(
        `/api/products?category=${filteredCategory}`,
      );
      if (response.data.length) setDisplayedProducts(response.data);
    }
    getFilteredCategory();
  }, [filteredCategory]);

  return (
    <CreateContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        displayedProducts,
        setTheme,
        theme,
        setFilteredCategory,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export default CreateContext;
