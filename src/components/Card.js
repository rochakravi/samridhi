import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  text-align: center;
  h6 {
    visibility: hidden;
  }
  &:hover {
    h6 {
      visibility: visible;
    }
  }
`;
const ImageDiv = styled(StyledDiv)`
  color: green;
`;

const Card = () => {
  return (
    <StyledDiv>
      <ImageDiv>
        <img
          style={{ maxWidth: "400px" }}
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
      </ImageDiv>
      <StyledDiv>
        <h6>Add to Cart</h6>
      </StyledDiv>
      <StyledDiv>
        <h4>details</h4>
      </StyledDiv>
      <StyledDiv>
        <h4>Price</h4>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Card;
