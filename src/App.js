import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
