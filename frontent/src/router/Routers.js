import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tour />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;