import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  selSong = (ss) => {
    this.props.selectingSong(ss);
  };
  addToCart = (ss) => {
    this.props.cartItems(ss);
  };
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                alert("Item added");
                return this.selSong(song);
              }}
            >
              Add to Wishlist
            </button>
            <button
              className="ui button primary"
              onClick={() => {
                alert("Item added to bagitem");
                return this.addToCart(song);
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
        <p>
          {this.props.wishlist.map((item) => {
            return <li>{item.title}</li>;
          })}
          {this.props.cart.map((item) => {
            return <li>{item.title}</li>;
          })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.product,
    wishlist: state.selection.wishlist,
    cart: state.selection.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectingSong: (song) => dispatch({ type: "SELECTED_SONG", payload: song }),
    cartItems: (song) => dispatch({ type: "ADD_TO_CART", payload: song }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
