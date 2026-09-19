import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../axios";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  
    useEffect(() => {
      async function getProducts() {
        try {
          const response = await api.get("/products");
          setAllProducts(response.data);
        } catch (err) {
          console.error(err);
        }
      }
      getProducts();
    }, []);

  return (
    <CreateContext.Provider value={{ showSidebar, setShowSidebar, allProducts }}>
      {children}
    </CreateContext.Provider>
  );
}

export default CreateContext;
