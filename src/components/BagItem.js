import React, { Component } from "react";
import { connect } from "react-redux";

class BagItem extends Component {
  state = {
    count: 6,
  };

  render() {
    return (
      <div>
        <p>aa</p>
        <p>{this.props.cartItemsCount}</p>
        <button onClick={this.props.addItem}>Add Item To Cart</button>
        <button onClick={this.props.removeItem}>Remove Item</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItemsCount: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch({ type: "ADD_ITEM" }),
    removeItem: () => dispatch({ type: "REMOVE_ITEM" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);
