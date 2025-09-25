import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { TicketProvider } from "./provider/TicketContext.jsx";
import { ToastContainer, Bounce } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicketProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </TicketProvider>
  </React.StrictMode>
);
