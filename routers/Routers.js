import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import User from "../pages/User"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Post from '../pages/Post';
import AboutUs from '../pages/AboutUs';
import Reset from '../pages/Reset';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SingleProduct  from '../pages/SingleProduct';
import { Products } from '../pages/Products';

const Routers = () => {


  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/reset" element={<Reset />} />
    </Routes>
  )
}

export default Routers