import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <p>counter</p>
        <p>{this.props.countVal}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countVal: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    decrementCounter: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
