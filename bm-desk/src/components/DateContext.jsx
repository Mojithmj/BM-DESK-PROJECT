import React, { createContext, useContext, useState } from 'react';
import { startOfYear, endOfYear } from 'date-fns';

const DateContext = createContext();

export function DateProvider({ children }) {
  // 🗓️ Default range set to the current year
  const [dateRange, setDateRange] = useState({
    from: startOfYear(new Date()), // January 1st of the current year
    to: endOfYear(new Date()),     // December 31st of the current year
  });

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
