import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    const list = this.props.carItems.map((res) => {
      return <li>{res}</li>;
    });
    return (
      <div>
        {this.props.carItems}
        <p>counter</p>
        <p>{this.props.countVal}</p>
        <button onClick={this.props.xyz}>Increment</button>
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
    countVal: state.counter,
    carItems: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xyz: () => dispatch({ type: "INCREMENT" }),
    decrementCounter: () => dispatch({ type: "DECREMENT" }),
    addItem: () => dispatch({ type: "ADD_ITEM", val: 2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
