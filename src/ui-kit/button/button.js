import React from "react";
import "./button.styles.scss";
import styled from "styled-components";

const GenericButton = styled.button`
  padding: 20px 10px;
`;

const Button = ({ title, onclick }) => {
  return (
    <button className="button" onClick={() => onclick()}>
      {title}
    </button>
  );
};

export default Button;
