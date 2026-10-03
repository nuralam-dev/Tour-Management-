import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour"; // যদি পেজের ফাইলের নাম Tour.jsx হয়
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      
      {/* Header-এর /tours এবং /tour দুটোর জন্যই রাউট দেওয়া হলো */}
      <Route path="/tours" element={<Tour />} />
      <Route path="/tour" element={<Tour />} />
      
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;