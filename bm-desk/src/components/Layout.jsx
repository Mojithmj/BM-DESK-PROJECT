
import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const SidebarContext = createContext({
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
});

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <div className="relative">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Main layout with dynamic spacing */}
        <div className="flex min-h-screen pt-16">
          {/* Sidebar */}
          <div className={`fixed transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-[70px]'
          }`}>
            <Sidebar />
          </div>

          {/* Main content area that adjusts with sidebar */}
          <div className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen
              ? 'lg:ml-[240px] xl:ml-[250px] mt-4'
              : 'lg:ml-[70px]'
          }`}>
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;   

// import React, { useState, createContext } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// export const SidebarContext = createContext({
//   isSidebarOpen: true,
//   setIsSidebarOpen: () => {},
// });

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
//       <div className="relative">
//         {/* Navbar */}
//         <div className="fixed top-0 left-0 right-0 z-50">
//           <Navbar />
//         </div>

//         {/* Main layout with dynamic spacing */}
//         <div className="flex min-h-screen pt-16">
//           {/* Sidebar */}
//           <div 
//             className={`
//               fixed transition-all duration-300 ease-in-out
//               ${isSidebarOpen 
//                 ? 'translate-x-0 min-[992px]:w-[240px] xl:w-[250px]' 
//                 : '-translate-x-full min-[992px]:translate-x-0 min-[992px]:w-[70px]'
//               }
//             `}
//           >
//             <Sidebar />
//           </div>

//           {/* Main content area that adjusts with sidebar */}
//           <div 
//             className={`
//               flex-1 transition-all duration-300 ease-in-out
//               ${isSidebarOpen 
//                 ? 'min-[992px]:ml-[240px] xl:ml-[250px] mt-4' 
//                 : 'min-[992px]:ml-[70px]'
//               }
//             `}
//           >
//             <div className="p-4">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>
//     </SidebarContext.Provider>
//   );
// };

// export default Layout;