import React from "react";

const Button = ({ content }) => {
  return (
    <button className="button-component" type="button">
      {content}
    </button>
  );
};

export default Button;
