import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StartUp from "./pages/StartUp";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./component/Navbar";

const Router = () => {
    return (
        <BrowserRouter>

        <Navbar/>
        <Routes>
           
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/StartUp" element={<StartUp/>} />
            <Route path="/Details" element={<Details/>} />
            <Route path="PageNotFound" element={<PageNotFound/>} /> </Routes>
            </BrowserRouter>
    )
}

export default Router;

