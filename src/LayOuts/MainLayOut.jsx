import React from "react";
import Footer from "./Pages/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <section className="flex justify-around md:justify-between md:text-2xl text-md px-10 shadow-md py-7 font-bold">
        <div className="px-3">
          <h1>Amazon</h1>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/dashbord">Dashbord</a>
          </li>
        </ul>
      </section>

      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
