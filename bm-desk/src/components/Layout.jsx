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

      <div className="fixed w-full top-16 md:w-[250px] md:block hidden">
        <Sidebar />
      </div>
      <div className="fixed left-60 top-20 w-[calc(100%_-_220px)] p-2">
          <div className="max-h-[85vh] overflow-y-auto pr-4"> 
          <Outlet />
          </div>
        </div>

        {/* 2 */}

{/* <div className="flex mt-16 h-[calc(100vh-4rem)]">
        
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        
        <div
          className={`flex-grow transition-all duration-300 ${
            isSidebarOpen ? "ml-[50px]" : "ml-[50px]"
          }`}
        >
          <div className="p-4 max-h-[85vh] overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div> */}

      {/* 3 */}
      {/* <div className="fixed w-full top-20  flex  h-[calc(100vh-4rem)] ">
        
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

      
        <div
          className={`flex-grow transition-all duration-300 ${
            isSidebarOpen ? "ml-[50px]" : "ml-[50px]"
          }`}
          style={{
            top: "4rem",
            width: "calc(100% - 220px)"
          }}
        >
          <div className="max-h-[85vh] overflow-y-auto pr-4">
            <Outlet />
          </div>
        </div>
      </div> */}


    </div>
  );
}

export default Layout;