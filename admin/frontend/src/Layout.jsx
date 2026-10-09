import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 sm:ml-60 w-full">
        <Header setShowSidebar={setShowSidebar} />
        <div className="relative top-20 px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
