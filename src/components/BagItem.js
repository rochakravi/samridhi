import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class BagItem extends Component {
  deleteItemfromCart = (index) => {
    alert("hello");
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
                  // alert("hello");
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
    //selectedSong: state.selectedSongRed.selected,
    selectedItem: state.selection.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // selectingSong: (song) => dispatch({ type: "SELECTED_SONG", value: 2 }),
    // selectingSong: (song) =>
    //   dispatch({
    //     type: "SELECTED_SONG",
    //     payload: { title: "Mahadev", duration: "4:05" },
    //   }),

    deleteItemFromCart: (index) => {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: index });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);
