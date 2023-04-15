import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import GloabStyle from "./GloabStyle";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <GloabStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
