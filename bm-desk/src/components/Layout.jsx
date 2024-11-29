import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="relative">
      {/* Navbar remains fixed at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main layout */}

      <div className="fixed w-full top-16 md:w-[250px] md:block hidden">
        <Sidebar />
      </div>
      <div className="fixed left-60 top-20 w-[calc(100%_-_220px)] p-2">
        
          <div className="max-h-[85vh] overflow-y-auto pr-4"> 
          <Outlet />
          </div>
        
      </div>
    </div>
  );
}

export default Layout;
