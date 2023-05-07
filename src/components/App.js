import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Tools from "./Tools";
import Competences from "./Competences";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tools />
      <Competences />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
