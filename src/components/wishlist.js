import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class Wishlist extends Component {
  addtoCart = (item) => {
    alert("item moved");
    this.props.addTOCART(item);
  };

  removefromWishlist = (index) => {
    alert("hello");
    this.props.removeFromWishList(index);
  };

  render() {
    return (
      <div className="ui divided list">
        <h2>There are {this.props.wishlist.length} items in wishlist</h2>
        {this.props.wishlist.map((item, index) => {
          return (
            <div>
              <Card item={item}></Card>{" "}
              <button
                onClick={() => {
                  this.addtoCart(item);
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  this.removefromWishlist(index);
                }}
              >
                Remove from WishList
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
    wishlist: state.selection.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // selectingSong: (song) => dispatch({ type: "SELECTED_SONG", value: 2 }),
    addTOCART: (item) =>
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: item,
      }),

    removeFromWishList: (index) =>
      dispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
