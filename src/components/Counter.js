import React, { Component } from "react";
import { connect } from "react-redux";
import * as action_types from "../actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter </h1>
        <p>
          {" "}
          this counter increment/decrement the value of the counter and push the
          value in the list displayed :
        </p>

        <p>{this.props.countVal}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <button onClick={this.props.addItem}>Add Item</button>
        <ul>
          {this.props.carItems.map((res) => {
            return <li>{res}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countVal: state.creducer.counter,
    carItems: state.creducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: action_types.INCREMENT }),
    decrementCounter: () => dispatch({ type: action_types.DECREMENT }),
    addItem: () => dispatch({ type: action_types.ADD_ITEM, val: 2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
