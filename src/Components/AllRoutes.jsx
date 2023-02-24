import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Car from "../Pages/Car";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleProducts from "../Pages/SingleProducts";
import Dashboard from '../Pages/Dashboard';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/car"
        element={
          // <PrivateRoutes>
            <Car />
          // </PrivateRoutes>
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route
        path="/single-p"
        element={
          // <PrivateRoutes>
            <SingleProducts />
          // </PrivateRoutes>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
