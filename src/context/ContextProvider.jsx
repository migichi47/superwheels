import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../axios";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark").matches
      ? "dark"
      : "light";
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/products");    
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
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export default CreateContext;
