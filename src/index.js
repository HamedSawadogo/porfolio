import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
    </Routes>
  </BrowserRouter>
);
