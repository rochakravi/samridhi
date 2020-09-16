import React, { useState } from "react";
import { connect } from "react-redux";
import "./payment.styles.scss";

const Payment = ({ cartItems }) => {
  const [total, setTotal] = useState(10);

  //   const manageTotal = () => {
  //     const cartTotal = cartItems.reduce((total, item) => {
  //       return total + item.price;
  //     });
  //     setTotal(cartTotal);
  //   };
  return (
    <div>
      {" "}
      {cartItems.length > 0 ? (
        <table className="table">
          <thead> Bill</thead>
          <th>Item</th>
          <th>Price</th>
          {cartItems.map((item) => {
            setTotal({ total: item.price });
            return (
              <tr>
                <td>{item.name}</td>
                <td> {item.price}</td>
              </tr>
            );
          })}
          <tfoot>
            <tr>
              <td>Total</td>
              <td> {total} </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h3>Add some items to cart to make payment</h3>
      )}{" "}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.selection.cart,
  };
};
export default connect(mapStateToProps)(Payment);
