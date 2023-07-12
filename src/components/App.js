import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Tools from "./Tools";
import Competences from "./Competences";
import Form from "./Form";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tools />
      <Competences />
      <Portfolio />
      <Form />
      <Footer />
    </>
  );
};

export default App;
