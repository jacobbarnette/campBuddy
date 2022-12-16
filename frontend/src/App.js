import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./pages/Header";
import AddCampground from "./pages/AddCampground";
import Campgrounds from "./pages/Campgrounds";
import CampgroundsById from "./pages/CampgroundsById";
import { ToastContainer } from "react-bootstrap";
import { getAllCampgrounds } from "../src/features/campground/campgroundService";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/addCampground" element={<AddCampground />} />
          <Route path="/Campgrounds" element={<Campgrounds />} />
          <Route path="Campgrounds/:id" element={<CampgroundsById />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
