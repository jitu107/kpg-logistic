import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./organisms/Footer/Footer";
import Header from "./organisms/Header/Header";
import MainBody from "./organisms/MainBody/MainBody";
import AboutUs from "./molecules/AboutUs/AboutUs";
import ContactUs from "./molecules/ContactUs/ContactUs";
import Services from "./molecules/Services/Services";


import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<MainBody />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
