import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <>
        <p>child</p>
        <p>{this.props.title}</p>
        <button onClick={this.props.handler}>Send BAck</button>
      </>
    );
  }
}

export default Test;
