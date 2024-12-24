
// import React, { createContext, useContext, useState } from "react";

// // Create Context
// const DateContext = createContext();

// // Custom Hook
// export const useDate = () => useContext(DateContext);

// // Provider Component
// export const DateProvider = ({ children }) => {
//   const [dateRange, setDateRange] = useState({
//     from: new Date(),
//     to: new Date(),
//   });

//   const updateDateRange = (range) => setDateRange(range);

//   return (
//     <DateContext.Provider value={{ dateRange, updateDateRange }}>
//       {children}
//     </DateContext.Provider>
//   );
// };


//me
// DateContext.jsx
import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export function DateProvider({ children }) {
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  const updateDateRange = (range) => {
    setDateRange(range);
  };

  return (
    <DateContext.Provider value={{ dateRange, updateDateRange }}>
      {children}
    </DateContext.Provider>
  );
}

export function useDate() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
}
