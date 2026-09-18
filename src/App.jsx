import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}
