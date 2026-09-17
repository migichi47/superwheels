import { createContext, useState } from "react";

const CreateContext = createContext();

export function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <CreateContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </CreateContext.Provider>
  );
}

export default CreateContext;
