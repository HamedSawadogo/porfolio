import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
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
