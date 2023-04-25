import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const statusFilters = Object.freeze({
    all: 'all',
    active: 'active',
    completed: 'completed',
  });

  const [status, setStatus] = useState(statusFilters.all);

  return (
    <FilterContext.Provider value={{ status, setStatus, statusFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
