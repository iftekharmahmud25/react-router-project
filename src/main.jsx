import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOuts/MainLayOut";
import Home from "./LayOuts/Pages/Home";
import Products from "./LayOuts/Pages/Products";
import myCreatedRoute from "./Route/Route";
import Dashbord from "./LayOuts/Pages/Dashbord";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
