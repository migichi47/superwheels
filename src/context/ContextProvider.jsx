import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../axios";
import { getInitialTheme } from "../utils/getInitialTheme";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme);
  const [setFilteredCategory] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/products/all");
        setAllProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);

  return (
    <CreateContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        allProducts,
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
