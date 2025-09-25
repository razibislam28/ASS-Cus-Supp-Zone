// TicketContext.js
import React, { createContext, useState } from "react";

// 1️⃣ Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const TicketContext = createContext();

// 2️⃣ Create a provider component
export const TicketProvider = ({ children }) => {
  const [inprogress, setInprogress] = useState([]);
  const [resolve, setResolve] = useState([]);

  return (
    <TicketContext.Provider value={{ inprogress, setInprogress,resolve,setResolve }}>
      {children}
    </TicketContext.Provider>
  );
};
