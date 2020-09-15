import React from "react";
import CollectionItem from "./../collection-item/collection-item";
import { connect } from "react-redux";
import "./cartitem.style.scss";
import { Link } from "react-router-dom";
import Button from "./../../ui-kit/button/button";

const CartItems = ({ cartItems, deleteItem }) => {
  const handleDelete = (index) => {
    alert("item will be deleted " + index);
    deleteItem(index);
  };
  return (
    <div className="cart">
      <h1> There are {cartItems.length} items in the Cart </h1>
      <div>
        {cartItems.length > 0 ? (
          <Link to="/payment">
            <button> Proceed to Payment</button>
          </Link>
        ) : (
          <h3> Add Some items in the cart</h3>
        )}
        {cartItems.map((item, index) => {
          return (
            <div className="cartitem">
              <CollectionItem
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              ></CollectionItem>
              <Button
                onclick={() => handleDelete(index)}
                title=" Remove item from cart"
              ></Button>
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
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(CartItems);
