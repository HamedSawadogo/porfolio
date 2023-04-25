import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Tools from "./Tools";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Tools />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
