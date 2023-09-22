import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../LayOuts/Pages/Home";
import Products from "../LayOuts/Pages/Products";
import Dashbord from "../LayOuts/Pages/Dashbord";







const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader : ()=> fetch(`https://dummyjson.com/products`)
      },
      {
         path : "/dashbord",
         element : <Dashbord></Dashbord>
      }
     
    ],
  },
]);

export default myCreatedRoute;
