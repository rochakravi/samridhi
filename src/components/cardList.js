import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const CardList = ({
  itemList,
  addItemToCart,
  selectedItems,
  addItemToWishList,
  wishlistItems,
}) => {
  const additemToCart = (item) => {
    alert(item.id);
    addItemToCart(item);
  };
  const additemTowishlist = (item) => {
    alert(item.id);
    addItemToWishList(item);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
      {itemList ? (
        itemList.map((item) => {
          return (
            <div style={{ margin: "10px" }}>
              <Card item={item}> </Card>{" "}
              <button
                onClick={() => {
                  //alert("hello");
                  additemToCart(item);
                }}
              >
                Add Item to Cart
              </button>
              <button
                onClick={() => {
                  //alert("hello");
                  additemTowishlist(item);
                }}
              >
                Add Item to WishList
              </button>
            </div>
          );
        })
      ) : (
        <div> there is no item to display</div>
      )}{" "}
      {console.log(selectedItems)}
      {console.log(wishlistItems)}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemList: state.product,
    selectedItems: state.selection.cart,
    wishlistItems: state.selection.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      return dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
    },
    addItemToWishList: (item) => {
      return dispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: item });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
