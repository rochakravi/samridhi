import React from "react";
import "./button.styles.scss";

const Button = ({ title, onclick }) => {
  return (
    <button className="button" onClick={() => onclick()}>
      {title}
    </button>
  );
};

export default Button;
