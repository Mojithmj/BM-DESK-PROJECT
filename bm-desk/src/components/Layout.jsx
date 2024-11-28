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

      <div className=" fixed w-full top-16 md:w-[250px] md:block hidden">
        <Sidebar />
      </div>
      <div className="absolute left-64 top-24 w-[calc(100%_-_280px)]">
        
          <div className="max-h-[95vh] overflow-y-auto"> 
          <Outlet />
          </div>
        
      </div>
    </div>
  );
}

export default Layout;
