import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainCreateRouter from "./routes/MainCreateRouter";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto dark:bg-zinc-900 dark:text-white">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={MainCreateRouter}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
