import React from "react";
import "./input.styles.scss";

const Input = ({ placeholder, handleChange, value }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
