import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
