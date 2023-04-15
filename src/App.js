import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <div className="contact">
        <h2>Me contacter</h2>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default App;
