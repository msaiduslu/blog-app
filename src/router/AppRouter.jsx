import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";
import Register from "../pages/Register";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-post" element={<PrivateRouter />}>
          <Route path="" element={<NewPost />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
