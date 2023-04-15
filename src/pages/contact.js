import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const styles = {
  textAlign: "center",
  color: "#f1f1f1",
  fontFamily: "Inter', sans-serif",
  fontSeize: "1.1rem",
  margin: "30px 0",
};
const Contact = () => {
  return (
    <div>
      <Navbar />
      <h2 style={styles}>Me Contacter en 1 min</h2>
      <Form />
    </div>
  );
};

export default Contact;
