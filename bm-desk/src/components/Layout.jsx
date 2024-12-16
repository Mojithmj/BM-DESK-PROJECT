import {React, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="relative">
    {/* Navbar remains fixed at the top */}
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar />
    </div>
  
    {/* Main layout */}
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-16 hidden md:block w-full md:w-[250px]">
        <Sidebar />
      </div>
  
      {/* Content */}
      <div
        className="fixed top-20 md:left-56 lg:md:left-60 left-0 md:w-[calc(100%_-_240px)] w-full p-2"
      >
        <div className="max-h-[85vh] overflow-y-auto pr-4">
          <Outlet />
        </div>
      </div>
    </div>
 

        


    </div>
  );
}

export default Layout;