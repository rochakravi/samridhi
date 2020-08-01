import React from "react";

const Child = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.children}</p>
    </div>
  );
};
export default Child;
