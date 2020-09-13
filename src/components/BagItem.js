import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class BagItem extends Component {
  deleteItemfromCart = (index) => {
    this.props.deleteItemFromCart(index);
  };
  render() {
    return (
      <div className="ui divided list">
        <h2>Cart Item Count: {this.props.selectedItem.length}</h2>
        {this.props.selectedItem.map((item, index) => {
          return (
            <div>
              <Card item={item}></Card>
              <button
                onClick={() => {
                  this.deleteItemfromCart(index);
                }}
              >
                {" "}
                Delete Item{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selection.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItemFromCart: (index) => {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: index });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);
