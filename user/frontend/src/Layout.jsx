import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumbs from "./components/Breadcrumbs";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
