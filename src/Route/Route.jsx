import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../LayOuts/Pages/Home";
import Products from "../LayOuts/Pages/Products";
import Dashbord from "../LayOuts/Pages/Dashbord";
import Product from "../LayOuts/Pages/Product/Product";
import DashboardLayout from "../LayOuts/DashboardLayout";
import Profile from "../LayOuts/Pages/Profile/Profile";
import EditProfile from "../LayOuts/Pages/EditProfile/EditProfile";






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
        path : "/products/:id",
        element : <Product></Product>,
        loader : (object)=> fetch(`https://dummyjson.com/products/${object.params.id}`)
      },
      {
         path : "/dashbord",
         element : <DashboardLayout></DashboardLayout>,
         children : [
            {
                path : "/dashbord/profile",
                element : <Profile></Profile>
            },
            {
                path : "/dashbord/editprofile",
                element : <EditProfile></EditProfile>
            },
         ]
      }
     
    ],
  },
]);

export default myCreatedRoute;
