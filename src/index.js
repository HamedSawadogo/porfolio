import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import GloabStyle from "./GloabStyle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <GloabStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
