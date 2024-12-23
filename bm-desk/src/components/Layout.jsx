// Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main layout with dynamic spacing */}
      <div className="flex min-h-screen pt-16">
        {/* Sidebar */}
        <div className={`fixed transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        {/* Main content area that adjusts with sidebar */}
        <div className={`flex-1 transition-all duration-300 ease-in-out w-[calc(100%_-_220px)] ${
          isSidebarOpen 
            ? 'lg:ml-[240px] xl:ml-[250px] mt-6' 
            : 'lg:ml-[80px] w-[calc(100%_-_220px)] mt-6'
        }`}>
          <div className="ml-3 mr-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;