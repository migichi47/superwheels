import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
);
