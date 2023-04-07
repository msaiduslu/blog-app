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
import PostDetail from "../pages/PostDetail";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";

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
        <Route path="/my-posts" element={<PrivateRouter />}>
          <Route path="" element={<MyPosts />} />
        </Route>
        <Route path="/post-detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<PostDetail />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
