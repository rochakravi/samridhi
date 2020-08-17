import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  render() {
    const parentToChild = () => {
      console.log("Rechable");
    };
    return (
      <>
        <p>Parent</p>
        <Child title="gh" handler={parentToChild} />
      </>
    );
  }
}

export default Parent;
