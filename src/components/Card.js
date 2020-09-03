import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  text-align: center;
  border: solid;
`;
const ImageDiv = styled(StyledDiv)`
  color: green;
`;

const Card = ({ item }) => {
  return (
    <StyledDiv>
      {/* <ImageDiv>
        <img
          style={{ maxWidth: "400px" }}
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />
      </ImageDiv> */}
      <StyledDiv>
        <h3>{item.name} </h3>
        <h4>{item.desc}</h4>
        <StyledDiv>
          <h4>{item.price}</h4>
        </StyledDiv>
      </StyledDiv>
      )
    </StyledDiv>
  );
};

export default Card;
