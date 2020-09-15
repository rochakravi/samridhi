import React from "react";
import CollectionItem from "./../collection-item/collection-item";
import { connect } from "react-redux";

const CartItems = ({ cartItems, deleteItem }) => {
  const handleDelete = (index) => {
    alert("item will be deleted " + index);
    deleteItem(index);
  };
  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <div>
              <CollectionItem
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              ></CollectionItem>
              <button onClick={() => handleDelete(index)}>
                Remove item from cart
              </button>
            </div>
          );
        })}
      </ul>
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
