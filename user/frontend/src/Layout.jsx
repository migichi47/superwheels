import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumbs from "./components/Breadcrumbs";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-30 lg:pt-40">
        {/* <Breadcrumbs /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
