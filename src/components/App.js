import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Competences from "./Competences";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Competences />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
