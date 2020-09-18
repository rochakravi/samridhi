import React, { useEffect, useState } from "react";
import CollectionItem from "./../collection-item/collection-item";
import { connect } from "react-redux";
import "./cartitem.style.scss";
import { Link } from "react-router-dom";
import Button from "./../../ui-kit/button/button";
import ListView from "./../listView/ListView";

const CartItems = ({ cartItems, deleteItem, addtoWishList }) => {
  const handleDelete = (index) => {
    deleteItem(index);
  };

  const handleaddtoWishList = (item, index) => {
    addtoWishList(item);
    deleteItem(index);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((a, b) => a + Math.round(b.price), 0));
  });
  return (
    <div className="cart">
      <h1> There are {cartItems.length} items in the Cart </h1>
      <h2> Cart Total Amount is {totalPrice}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {cartItems.length > 0 ? (
          <Link to="/payment">
            <h3> Proceed to Payment</h3>
          </Link>
        ) : (
          <h3> Add Some items in the cart</h3>
        )}
        {cartItems.map((item, index) => {
          return (
            <div>
              <ListView
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                btnTitle="Remove From Cart"
                btnhandleClick={() => handleDelete(index)}
                secondbtnTitle="Move to Wishlist"
                secondbtnhandleClick={() => handleaddtoWishList(item, index)}
              ></ListView>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartItems: state.selection.cart };
};

const mapDispatchToprops = (dispatch) => {
  return {
    deleteItem: (index) =>
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: index }),
    addtoWishList: (item) =>
      dispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: item }),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(CartItems);
