import React from "react";
import { connect } from "react-redux";

const CartItems = (cartItems) => {
  return (
    <div>
      <h1>Cart Items</h1>
      {/* <ul>
        {" "}
        {cartItems.map((item) => {
          return <li> {item.name}</li>;
        })}
      </ul> */}
      {console.log(cartItems)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartItems: state };
};
export default connect(mapStateToProps)(CartItems);
