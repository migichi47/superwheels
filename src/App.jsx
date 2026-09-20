import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import api from "./axios";

export default function App() {
  console.log("BASE URL:", api.defaults.baseURL);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
